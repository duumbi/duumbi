locals {
  duumbi_client_desc = var.environment == "live" ? format("Identity and Access Management for the %s Region", upper(var.region)) : "Identity and Access Management"
}