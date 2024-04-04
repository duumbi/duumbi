resource "port_blueprint" "github_repository" {
  identifier  = "github_repository"
  title       = "Repository"
  icon        = "Github"
  description = "GitHub Repository"

  properties = {
    string_props = {
      "readme" = {
        title  = "README"
        icon   = "Book"
        format = "markdown"
      }
      "url" = {
        title  = "Repository URL"
        format = "url"
        icon   = "url"
      }
      "defaultBranch" = {
        title = "Default branch"
      }
    }
  }
}