resource "azurerm_virtual_network" "main_vnet" {
  name                = local.main_vnet_name
  address_space       = var.vnet_address_space
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.main_rg.name
  tags                = local.tags
}

resource "azurerm_subnet" "aks" {
  name                 = "aks-subnet"
  resource_group_name  = azurerm_resource_group.main_rg.name
  virtual_network_name = azurerm_virtual_network.main_vnet.name
  address_prefixes     = var.subnets_address_prefixes["aks"]
}
