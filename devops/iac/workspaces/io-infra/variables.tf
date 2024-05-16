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

variable "location_base" {
  type = object({
    name        = string
    short_name  = string
    region_id   = string
    region_name = string
  })
  description = "The Azure region in which region bound resources will be deployed. Please see: https://azure.microsoft.com/en-gb/global-infrastructure/geographies/"

  default = {
    name        = "westeurope"
    short_name  = "we"
    region_id   = "eu"
    region_name = "Europe"
  }
}

variable "tags_base" {
  type        = map(string)
  description = "If specified, will set the default tags for all resources deployed by this module where supported"

  default = {
    managed_by = "terraform"
  }
}

variable "vnet_address_space" {
  type        = list(string)
  default     = ["10.0.0.0/16"]
  description = "The address space that is used in the virtual networks"
}

# PORT.IO ---------------------------------------------------------------------
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

# DOPPLER ---------------------------------------------------------------------
variable "doppler_config" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_CONFIG environment variable"
}

variable "doppler_environment" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_ENV environment variable"
}

variable "doppler_project" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_PROJECT environment variable"
}

variable "dns_azure_duumbi_txt_record" {
  type        = string
  sensitive   = true
  description = "Azure DNS TXT record for duumbi.io"
}

variable "dns_github_txt_record" {
  type        = string
  sensitive   = true
  description = "value for the DNS TXT record for the GitHub challenge"
}

variable "dns_privateemail_dkim_txt_record" {
  type        = string
  sensitive   = true
  description = "value for the DNS TXT record for the privateemail DKIM key"
}
