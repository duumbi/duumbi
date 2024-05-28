# Datasource to get Latest Azure AKS latest Version
data "azurerm_kubernetes_service_versions" "current" {
  location        = local.aks_location_name
  include_preview = false
}

resource "azurerm_resource_group" "aks_rg" {
  name     = local.aks_rg_name
  location = local.aks_location_name
  tags     = local.tags
}

resource "azurerm_user_assigned_identity" "aks_id" {
  name                = "aks-id"
  location            = local.aks_location_name
  resource_group_name = azurerm_resource_group.aks_rg.name
}

resource "azurerm_role_assignment" "aks_ra" {
  scope                = azurerm_resource_group.aks_rg.id
  role_definition_name = "Network Contributor"
  principal_id         = azurerm_user_assigned_identity.aks_id.principal_id
}

resource "azurerm_role_assignment" "dns_zone_contributor" {
  scope                = azurerm_dns_zone.duumbi_io[0].id
  role_definition_name = "DNS Zone Contributor"
  principal_id         = azurerm_user_assigned_identity.aks_id.principal_id
}

# Public IP for Ingress Controller
resource "azurerm_public_ip" "ingress" {
  count = var.aks_enable_ingress ? 1 : 0

  name                = local.aks_ingress_ip_name
  location            = local.aks_location_name
  resource_group_name = local.aks_node_rg_name
  sku                 = "Standard"
  allocation_method   = "Static"
  domain_name_label   = lower(format("%s-%s-aks-ingress", var.organization, var.project))
  tags                = local.tags
}

#trivy:ignore:avd-azu-0040
resource "azurerm_kubernetes_cluster" "aks" {
  name                      = local.aks_name
  location                  = local.aks_location_name
  resource_group_name       = azurerm_resource_group.aks_rg.name
  dns_prefix                = "${azurerm_resource_group.aks_rg.name}-cluster"
  sku_tier                  = "Free"
  kubernetes_version        = data.azurerm_kubernetes_service_versions.current.latest_version
  automatic_channel_upgrade = "stable"
  private_cluster_enabled   = false
  node_resource_group       = local.aks_node_rg_name
  oidc_issuer_enabled       = true
  workload_identity_enabled = true

  api_server_access_profile {
    authorized_ip_ranges = var.authorized_ip_to_aks_api_server
  }

  default_node_pool {
    name                 = "general"
    vm_size              = var.vm_size_aks_system_pool
    vnet_subnet_id       = azurerm_subnet.aks.id
    orchestrator_version = data.azurerm_kubernetes_service_versions.current.latest_version
    type                 = "VirtualMachineScaleSets"
    enable_auto_scaling  = true
    node_count           = 1
    min_count            = 1
    max_count            = 2
    max_pods             = 30
    os_disk_size_gb      = 75
    os_disk_type         = "Ephemeral"
    os_sku               = "Ubuntu"
    upgrade_settings {
      max_surge = "10%"
    }

    node_labels = {
      role            = "general"
      "nodepool-type" = "system"
      "environment"   = var.environment
      "nodepoolos"    = "linux"
    }
    tags = {
      "nodepool-type" = "system"
      "environment"   = var.environment
      "nodepoolos"    = "linux"
    }
  }

  network_profile {
    network_plugin    = "azure"
    network_policy    = "azure"
    load_balancer_sku = "standard"
    dns_service_ip    = var.aks_network_dns_service_ip
    service_cidr      = var.aks_network_service_cidr
  }

  linux_profile {
    admin_username = var.aks_system_pool_admin_username
    ssh_key {
      key_data = var.aks_system_pool_ssh_public_key
    }
  }

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.aks_id.id]
  }

  azure_active_directory_role_based_access_control {
    managed                = true
    azure_rbac_enabled     = true
    admin_group_object_ids = [var.duumbi_aks_administrators_object_id]
  }

  tags = local.tags

  lifecycle {
    ignore_changes = [default_node_pool[0].node_count]
  }

  depends_on = [
    azurerm_role_assignment.aks_ra
  ]
}

/* resource "azurerm_kubernetes_cluster_node_pool" "spot" {
  name                  = "spot"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.aks.id
  vm_size               = var.vm_size_aks_user_spot_pool
  vnet_subnet_id        = azurerm_subnet.aks.id
  orchestrator_version  = data.azurerm_kubernetes_service_versions.current.latest_version
  priority              = "Spot"
  spot_max_price        = -1
  eviction_policy       = "Delete"
  enable_auto_scaling   = true
  node_count            = 1
  min_count             = 0
  max_count             = 2
  max_pods              = 30
  os_disk_size_gb       = 75
  os_disk_type          = "Ephemeral"

  node_labels = {
    role                                    = "spot"
    "kubernetes.azure.com/scalesetpriority" = "spot"
    "nodepool-type"                         = "user"
    "nodepoolos"                            = "linux"
    "environment"                           = var.environment
  }

  node_taints = [
    "spot:NoSchedule",
    "kubernetes.azure.com/scalesetpriority=spot:NoSchedule"
  ]

  tags = local.tags

  lifecycle {
    ignore_changes = [node_count]
  }
} */

resource "azurerm_federated_identity_credential" "external_dns" {
  name                = "${local.aks_name}-sa-infra-external-dns"
  resource_group_name = azurerm_resource_group.aks_rg.name
  audience            = ["api://AzureADTokenExchange"]
  issuer              = azurerm_kubernetes_cluster.aks.oidc_issuer_url
  parent_id           = azurerm_user_assigned_identity.aks_id.id
  subject             = "system:serviceaccount:infra:external-dns"
}
