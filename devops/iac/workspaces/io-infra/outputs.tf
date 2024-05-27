output "azurerm_main_rg_id" {
  value       = azurerm_resource_group.main_rg.id
  description = "identity of duumbi.io resource group"
}

output "azurerm_site_swa_name" {
  value       = azurerm_static_web_app.site_swa.name
  description = "name of duumbi.io resource group"
}

# Azure AKS Outputs
output "azurerm_aks_cluster_id" {
  value       = azurerm_kubernetes_cluster.aks.id
  description = "The Kubernetes Managed Cluster ID"
}

output "azurerm_aks_cluster_name" {
  value       = azurerm_kubernetes_cluster.aks.name
  description = "The name of the Managed Kubernetes Cluster"
}

output "azurerm_aks_cluster_kubernetes_version" {
  value       = azurerm_kubernetes_cluster.aks.kubernetes_version
  description = "Version of Kubernetes Cluster"
}

output "azurerm_aks_cluster_ingress_ip" {
  value       = azurerm_public_ip.ingress.ip_address
  description = "The IP address of the Managed Kubernetes Cluster Ingress"
}