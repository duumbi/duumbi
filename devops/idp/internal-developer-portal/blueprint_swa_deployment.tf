resource "port_blueprint" "swa_deployment" {
  identifier  = "swa_deployment"
  title       = "SWA Deployment"
  icon        = "GithubActions"
  description = "Static Web App Deployment"

  properties = {
    string_props = {
      "version" = {
        title       = "Version"
        description = "The version of the deployment"
        required    = true
      }
      "commitSha" = {
        title = "Commit SHA"
      }
    }
  }

  relations = {
    "swa" = {
      title  = "Azure Static Web App"
      target = port_blueprint.azure_static_web_app.identifier
      many   = false
    }
    "application" = {
      title  = "Web Application"
      target = port_blueprint.web_application.identifier
      many   = false
    }
  }

}