variable "organization" {
  type        = string
  description = "Organization name"

  default = "duumbi"

}

variable "project" {
  type        = string
  description = "Project name"

  default = "io"
}

variable "environment" {
  type        = string
  description = "Environment name"

  validation {
    condition     = contains(["live", "stage"], var.environment)
    error_message = "Valid values for var: environment are (live, stage)"
  }

  default = "live"
}

variable "location_base" {
  type = object({
    name       = string
    short_name = string
  })
  description = "The Azure region in which region bound resources will be deployed. Please see: https://azure.microsoft.com/en-gb/global-infrastructure/geographies/"

  default = {
    name       = "westeurope"
    short_name = "we"
  }
}

variable "tags_base" {
  type        = map(string)
  description = "If specified, will set the default tags for all resources deployed by this module where supported."
}
