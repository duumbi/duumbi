resource "port_blueprint" "deployment" {
  identifier  = "deployment"
  title       = "Deployment"
  icon        = "GithubActions"
  description = "Deployment"

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

  mirror_properties = {
    "environment" = {
      title = "Environment"
      path  = "environment.name"
    }
  }

}