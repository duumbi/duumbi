resource "azurerm_static_site" "duumbi_live_io_site_swa" {
  name                = local.site_swa_name
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.duumbi_live_io_rg.name
  sku_size            = "Free"
  sku_tier            = "Free"
  tags                = local.tags
  app_settings        = {}
}
