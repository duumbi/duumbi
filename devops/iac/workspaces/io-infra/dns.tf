resource "azurerm_dns_zone" "duumbi_io" {
  name                = "duumbi.io"
  resource_group_name = azurerm_resource_group.main_rg.name
  tags                = local.tags
}

resource "azurerm_dns_cname_record" "duumbi_io" {
  name                = "@"
  zone_name           = azurerm_dns_zone.duumbi_io.name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  record              = azurerm_static_web_app.site_swa.default_host_name
  tags                = local.tags
}
