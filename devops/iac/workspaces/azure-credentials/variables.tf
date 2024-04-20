variable "tfc_azure_audience" {
  type        = string
  default     = "api://AzureADTokenExchange"
  description = "The audience value to use in run identity tokens"
}

variable "tfc_hostname" {
  type        = string
  default     = "app.terraform.io"
  description = "The hostname of the TFC or TFE instance you'd like to use with Azure"
}

variable "tfc_organization_name" {
  type        = string
  default     = "duumbi"
  description = "The name of your Terraform Cloud organization"
}

variable "tfc_project_name" {
  type        = string
  default     = "Duumbi"
  description = "The project under which a workspace will be created"
}

variable "tfc_workspace_name" {
  type        = map(string)
  description = "The name of the workspace that you'd like to create and connect to Azure"
  default = {
    "duumbi-live-io-infra-federated-credential" = "live-io-infra"
    "duumbi-live-io-auth0-federated-credential" = "live-io-auth0"

  }
}
