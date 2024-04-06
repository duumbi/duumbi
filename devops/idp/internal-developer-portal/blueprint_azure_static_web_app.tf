resource "port_blueprint" "azure_static_web_app" {
  identifier  = "azure_static_web_app"
  title       = "Azure Static Web App"
  icon        = "Azure"
  description = "App Service Static Web App"

  properties = {
    string_props = {
      "name" = {
        title    = "Name"
        required = true
      }
      "defaultHostName" = {
        title    = "Default host name"
        required = true
      }
      "resourceGroupName" = {
        title    = "Resource Groupe"
        required = true
      }
      "skuTier" = {
        title = "SKU tier"
      }
    }
  }

  calculation_properties = {
    identifier  = "defaultUrl"
    title       = "Default url"
    type        = "string"
    format      = "url"
    calculation = "'https://' + .properties.defaultHostName"
  }
}
