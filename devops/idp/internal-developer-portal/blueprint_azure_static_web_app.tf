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
        title    = "Default Host Name"
        required = true
      }
      "resourceGroupName" = {
        title    = "Resource Groupe"
        required = true
      }
      "skuTier" = {
        title = "Specifies the SKU tier of the Static Web App"
      }
    }

    calculationProperties = {
      "defaultUrl" : {
        title       = "Default url"
        type        = "string"
        format      = "url"
        calculation = "'https://' + .properties.defaultHostName"
      }
    }
  }
}
