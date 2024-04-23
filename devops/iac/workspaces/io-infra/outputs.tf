output "azurerm_main_rg_id" {
  value       = azurerm_resource_group.main_rg.id
  description = "identity of duumbi.io resource group"
}

output "azurerm_site_swa_name" {
  value       = azurerm_static_web_app.site_swa.name
  description = "name of duumbi.io resource group"
}