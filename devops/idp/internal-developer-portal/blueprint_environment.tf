resource "port_blueprint" "environment" {
  identifier  = "environment"
  title       = "Environment"
  icon        = "Environment"
  description = "Environment"

  properties = {
    string_props = {
      "name" = {
        title    = "Name"
        required = true
      }
    }
  }

  relations = {
    "region" = {
      title  = "Region"
      target = port_blueprint.region.identifier
      many   = false
    }
  }
}
