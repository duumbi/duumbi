resource "azurerm_static_web_app" "app_swa" {
  name                = local.app_swa_name
  location            = local.location_name
  resource_group_name = azurerm_resource_group.main_rg.name
  sku_size            = "Free"
  sku_tier            = "Free"
  tags                = local.tags
  app_settings        = {}
}

resource "azurerm_dns_cname_record" "app_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "app"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  record              = azurerm_static_web_app.app_swa.default_host_name
  tags                = local.tags

  depends_on = [azurerm_static_web_app.app_swa]
}


# --------------------------------------------------------------
# New Relic
resource "newrelic_browser_application" "app_swa" {
  name                        = "Duumbi.io Web Application - App"
  cookies_enabled             = true
  distributed_tracing_enabled = true
  loader_type                 = "SPA"
}