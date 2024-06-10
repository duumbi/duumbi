terraform {
  required_version = "1.8.5"

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
      version = "3.106.1"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.3"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.8.0"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.9.1"
    }
  }
}