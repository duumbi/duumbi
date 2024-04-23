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
      "applicationDomain" = {
        title    = "Application domain"
        required = true
      }
      "applicationType" = {
        title    = "ApplicationType"
        required = true
        enum = [
          "native",
          "spa",
          "regular_web",
          "non_interactive",
          "sso_integration",
          "rms",
          "box",
          "cloudbees",
          "concur",
          "dropbox",
          "mscrm",
          "echosign",
          "egnyte",
          "newrelic",
          "office365",
          "salesforce",
          "sentry",
          "sharepoint",
          "slack",
          "springcm",
          "zendesk",
          "zoom"
        ]
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

