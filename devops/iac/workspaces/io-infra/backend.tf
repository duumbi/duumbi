terraform {
  required_version = "1.9.8"

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
      version = "4.5.0"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.23"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.11.0"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.11.11"
    }

    newrelic = {
      source  = "newrelic/newrelic"
      version = "3.50.0"
    }
  }
}