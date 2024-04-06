output "duumbi_live_io_rg_id" {
  value       = azurerm_resource_group.duumbi_live_io_rg.id
  description = "identity of duumbi.io resource group"
}

output "duumbi_live_io_site_swa_default_host_name" {
  value       = azurerm_static_web_app.duumbi_live_io_site_swa.default_host_name
  description = "The default host name of the Static Web App"
}