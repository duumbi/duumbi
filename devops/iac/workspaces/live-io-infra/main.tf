resource "azurerm_resource_group" "duumbi_live_io_rg" {
  name     = local.rg_name
  location = var.location_base.name
  tags     = local.tags
}