terraform {
  required_version = "1.9.3"

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
      version = "3.114.0"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.16"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.9.0"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.11.6"
    }

    newrelic = {
      source  = "newrelic/newrelic"
      version = "3.41.0"
    }
  }
}