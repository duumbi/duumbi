terraform {
  required_version = "1.9.2"

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
      version = "3.113.0"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.12"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.9.0"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.11.5"
    }

    newrelic = {
      source  = "newrelic/newrelic"
      version = "3.40.1"
    }
  }
}