resource "port_blueprint" "region" {
  identifier  = "region"
  title       = "Region"
  icon        = "EU"
  description = "Region"

  properties = {
    string_props = {
      "name" = {
        title    = "Name"
        required = true
      }
    }
  }
}
