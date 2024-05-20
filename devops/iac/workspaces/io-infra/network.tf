resource "azurerm_virtual_network" "aks_vnet" {
  name                = local.aks_vnet_name
  address_space       = var.aks_vnet_address_space
  location            = local.aks_location_name
  resource_group_name = azurerm_resource_group.aks_rg.name
  tags                = local.tags
}

resource "azurerm_subnet" "aks" {
  name                 = "aks-subnet"
  resource_group_name  = azurerm_resource_group.aks_rg.name
  virtual_network_name = azurerm_virtual_network.aks_vnet.name
  address_prefixes     = var.aks_subnets_address_prefixes["aks"]
}
