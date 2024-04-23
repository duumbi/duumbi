locals {
  duumbi_client_desc = format("Identity and Access Management for the %s Region", upper(var.region))
  tenant             = format("%s-%s", lower(var.organization), lower(var.environment))
  app_domain         = format("%s-%s.%s.auth0.com", lower(var.organization), lower(var.environment), lower(var.region))
}