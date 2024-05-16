resource "azurerm_user_assigned_identity" "aks_id" {
  name                = "aks-id"
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.main_rg.name
}

resource "azurerm_role_assignment" "aks_ra" {
  scope                = azurerm_resource_group.main_rg.id
  role_definition_name = "Network Contributor"
  principal_id         = azurerm_user_assigned_identity.aks_id.principal_id
}