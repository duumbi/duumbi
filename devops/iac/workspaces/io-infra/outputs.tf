output "main_rg_id" {
  value       = azurerm_resource_group.main_rg.id
  description = "identity of duumbi.io resource group"
}

/* output "duumbi_live_io_site_swa_default_host_name" {
  value       = azurerm_static_web_app.duumbi_live_io_site_swa.default_host_name
  description = "The default host name of the Static Web App"
} */

output "site_web_application_id" {
  value       = doppler_project.site_web_application.id
  description = "identity of doppler project for duumbi.io web site"
}