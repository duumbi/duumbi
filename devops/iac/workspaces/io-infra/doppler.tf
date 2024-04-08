resource "doppler_project" "site_web_application" {
  name        = "site-web-application"
  description = "Official duumbi.io web site"
}

resource "doppler_environment" "site_web_application_environment" {
  project = doppler_project.site_web_application.id
  slug    = var.environment
  name    = title(var.environment)
}