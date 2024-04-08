data "terraform_remote_state" "idp" {
  backend = "remote"
  config = {
    organization = "duumbi"
    workspaces = {
      name = "internal-developer-portal"
    }
  }
}

resource "azurerm_resource_group" "main_rg" {
  name     = local.main_rg_name
  location = var.location_base.name
  tags     = local.tags
}

resource "port_entity" "environment_entity" {
  identifier = var.environment
  title      = title(var.environment)
  blueprint  = "environment"
  properties = {
    "string_props" = {
      "name" = var.environment
    }
  }
}