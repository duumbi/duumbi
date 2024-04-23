resource "port_blueprint" "iam" {
  identifier  = "iam"
  title       = "IAM"
  icon        = "Users"
  description = "Identity and access management"

  properties = {
    string_props = {
      "tenant" = {
        title       = "Tenant"
        description = "Tenant name"
        required    = true
      }
      "application_name" = {
        title    = "Application name"
        required = true
      }
      "application_domain" = {
        title    = "Application domain"
        required = true
      }
    }
  }

  relations = {
    "swa" = {
      title  = "Azure Static Web App"
      target = port_blueprint.azure_static_web_app.identifier
      many   = false
    }
  }

}

