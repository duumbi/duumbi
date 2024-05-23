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

#trivy:ignore:avd-azu-0040
resource "azurerm_kubernetes_cluster" "aks" {
  name                      = local.aks_name
  location                  = local.aks_location_name
  resource_group_name       = azurerm_resource_group.aks_rg.name
  dns_prefix                = "aks-cluster"
  sku_tier                  = "Free"
  kubernetes_version        = var.kubernetes_version
  automatic_channel_upgrade = "stable"
  private_cluster_enabled   = false
  node_resource_group       = local.aks_node_rg_name
  oidc_issuer_enabled       = true
  workload_identity_enabled = true

  api_server_access_profile {
    authorized_ip_ranges = var.authorized_ip_to_aks_api_server
  }

  network_profile {
    network_plugin = "azure"
    network_policy = "azure"
    dns_service_ip = var.aks_network_dns_service_ip
    service_cidr   = var.aks_network_service_cidr
  }

  default_node_pool {
    name                 = "general"
    vm_size              = var.vm_size_aks_system_pool
    vnet_subnet_id       = azurerm_subnet.aks.id
    orchestrator_version = var.kubernetes_version
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
      role = "general"
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

resource "azurerm_kubernetes_cluster_node_pool" "spot" {
  name                  = "spot"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.aks.id
  vm_size               = var.vm_size_aks_user_spot_pool
  vnet_subnet_id        = azurerm_subnet.aks.id
  orchestrator_version  = var.kubernetes_version
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
  }

  node_taints = [
    "spot:NoSchedule",
    "kubernetes.azure.com/scalesetpriority=spot:NoSchedule"
  ]

  tags = local.tags

  lifecycle {
    ignore_changes = [node_count]
  }
}
