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
      "defaultDomain" = {
        title = "Default domain name"
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
    "defaultUrl" = {
      title       = "Default url"
      type        = "string"
      format      = "url"
      icon        = "Link"
      calculation = "'https://' + .properties.defaultHostName"
    }
    "Url" = {
      title       = "Url"
      type        = "string"
      format      = "url"
      icon        = "Link"
      calculation = "'https://' + .properties.defaultDomain"
    }
  }

  relations = {
    "environment" = {
      title    = "Environment"
      required = false
      target   = port_blueprint.environment.identifier
      many     = false
    }
    "monitor" = {
      title    = "Monitor"
      required = false
      target   = port_blueprint.uptime_monitor.identifier
      many     = false
    }
  }
}
