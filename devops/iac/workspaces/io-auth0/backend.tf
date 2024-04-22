terraform {
  required_version = "1.7.0"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      tags = ["io-auth0"]
    }
  }

  required_providers {

    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.99.0"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "1.10.5"
    }

    auth0 = {
      source  = "auth0/auth0"
      version = "1.2.0"
    }
  }
}