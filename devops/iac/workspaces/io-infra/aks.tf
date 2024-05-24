resource "azurerm_user_assigned_identity" "aks_id" {
  name                = "aks-id"
  location            = local.aks_location_name
  resource_group_name = azurerm_resource_group.aks_rg.name
}

resource "azurerm_role_assignment" "aks_ra" {
  scope                = azurerm_resource_group.aks_rg.id
  role_definition_name = "Network Contributor"
  principal_id         = azurerm_user_assigned_identity.aks_id.principal_id
}

#trivy:ignore:avd-azu-0040
