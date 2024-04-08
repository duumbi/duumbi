/*
resource "azurerm_resource_group" "duumbi_live_io_rg" {
  name     = local.rg_name
  location = var.location_base.name
  tags     = local.tags
}

resource "port_entity" "duumbi_live_io_environment_entity" {
  identifier = var.environment
  title      = title(var.environment)
  blueprint  = "environment"
  properties = {
    "string_props" = {
      "name" = var.environment
    }
  }
} */