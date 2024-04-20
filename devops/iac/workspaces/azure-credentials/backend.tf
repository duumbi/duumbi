terraform {
  required_version = ">= 1.8.0"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      tags = ["azure-credentials"]
    }
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.100.0"
    }

    azuread = {
      source  = "hashicorp/azuread"
      version = "2.48.0"
    }
  }
}