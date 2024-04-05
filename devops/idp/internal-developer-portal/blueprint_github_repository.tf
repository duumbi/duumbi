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
        title    = "Repository URL"
        format   = "url"
        icon     = "Link"
        required = true
      }
      "defaultBranch" = {
        title    = "Default branch"
        required = true
      }
      "description" = {
        title     = "Default branch"
        icon      = "BlankPage"
        maxLength = 100
      }
      "homePage" = {
        title  = "Homepage"
        format = "url"
        icon   = "Link"
      }
      "createdAt" = {
        title  = "Created At"
        format = "date-time"
      }
    }

    boolean_props = {
      "private" = {
        title    = "Private"
        required = true
      }
    }

  }
}
