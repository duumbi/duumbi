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
  location = local.location_name
  tags     = local.tags
}

resource "port_entity" "region_entity" {
  identifier = var.location_base.region_id
  title      = title(local.location_region_name)
  blueprint  = data.terraform_remote_state.idp.outputs.port_region_identifier
  properties = {
    "string_props" = {
      "name" = local.location_region_name
    }
  }
}

resource "port_entity" "environment_entity" {
  identifier = var.environment
  title      = title(var.environment)
  blueprint  = data.terraform_remote_state.idp.outputs.port_environment_identifier
  properties = {
    "string_props" = {
      "name" = var.environment
    }
  }

  relations = {
    single_relations = {
      "region" = port_entity.region_entity.identifier
    }
  }
}