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
}


variable "region" {
  type        = string
  description = "Region name"

  validation {
    condition     = contains(["eu", "us", "au"], var.region)
    error_message = "Valid values for var: region are (eu, us, au)"
  }
}

variable "port_client_id" {
  type        = string
  default     = ""
  sensitive   = true
  description = "Port Client ID. Get it from port UI"
}

variable "port_secret" {
  type        = string
  default     = ""
  sensitive   = true
  description = "Port Secret. Get it from port UI"
}

variable "auth0_urls" {
  type = object({
    callbacks      = list(string)
    allowed_logout = list(string)
    web_origins    = list(string)
  })
  description = "Values for allowed callback, logout and web origins"
}
