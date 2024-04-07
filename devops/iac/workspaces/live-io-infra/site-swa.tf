resource "azurerm_static_web_app" "duumbi_live_io_site_swa" {
  name                = local.site_swa_name
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.duumbi_live_io_rg.name
  sku_size            = "Free"
  sku_tier            = "Free"
  tags                = local.tags
  app_settings        = {}
}

resource "port_entity" "duumbi_live_io_site_swa_entity" {
  identifier = local.site_swa_name
  title      = "Duumbi.io Static Web App"
  blueprint  = "azure_static_web_app"
  properties = {
    "string_props" = {
      "name"              = local.site_swa_name
      "defaultHostName"   = azurerm_static_web_app.duumbi_live_io_site_swa.default_host_name
      "resourceGroupName" = azurerm_resource_group.duumbi_live_io_rg.name
      "skuTier"           = azurerm_static_web_app.duumbi_live_io_site_swa.sku_tier
    }
  }
}
