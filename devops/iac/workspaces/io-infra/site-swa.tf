resource "azurerm_static_web_app" "site_swa" {
  name                = local.site_swa_name
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.main_rg.name
  sku_size            = "Free"
  sku_tier            = "Free"
  tags                = local.tags
  app_settings        = {}
}

resource "port_entity" "site_swa_entity" {
  identifier = local.site_swa_name
  title      = "Static Web App - ${local.zone_name}"
  blueprint  = data.terraform_remote_state.idp.outputs.port_azure_static_web_app_identifier
  properties = {
    "string_props" = {
      "name"              = local.site_swa_name
      "defaultHostName"   = azurerm_static_web_app.site_swa.default_host_name
      "resourceGroupName" = azurerm_resource_group.main_rg.name
      "skuTier"           = azurerm_static_web_app.site_swa.sku_tier
      "defaultDomain"     = local.zone_name
    }
  }
  relations = {
    single_relations = {
      "environment" = var.environment
    }
  }
}
