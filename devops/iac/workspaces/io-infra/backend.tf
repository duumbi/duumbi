terraform {
  required_version = "1.8.3"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      tags = ["io-infra"]
    }
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.103.1"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.1"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.7.1"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.9.0"
    }
  }
}