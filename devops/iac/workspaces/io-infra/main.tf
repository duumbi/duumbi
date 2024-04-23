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

resource "port_entity" "region_entity" {
  identifier = var.location_base.region_id
  title      = title(var.location_base.region_name)
  blueprint  = data.terraform_remote_state.idp.outputs.port_region_identifier
  properties = {
    "string_props" = {
      "name" = var.location_base.region_name
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
      "region" = port_entity.region_entity.id
    }
  }
}