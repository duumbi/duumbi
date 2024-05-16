resource "azurerm_virtual_network" "main_vnet" {
  name                = local.main_vnet_name
  address_space       = var.vnet_address_space
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.main_rg.name
  tags                = local.tags
}
