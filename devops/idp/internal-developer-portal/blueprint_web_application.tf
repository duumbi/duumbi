resource "port_blueprint" "web_application" {
  identifier  = "web_application"
  title       = "Web Application"
  icon        = "Service"
  description = "Web Application"

  properties = {
    string_props = {
      "applicationName" = {
        title = "Application name"
      }
      "url" = {
        title  = "GitHub Repo"
        format = "url"
        icon   = "Github"
      }
      "readme" = {
        title  = "README"
        icon   = "Book"
        format = "markdown"
      }
    }
  }

  relations = {
    "repository" = {
      title    = "Repository"
      required = false
      target   = port_blueprint.github_repository.identifier
      many     = false
    }
  }
}
