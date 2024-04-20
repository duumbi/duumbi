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
