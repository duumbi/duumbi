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
      version = "2.0.11"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.8.0"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.11.4"
    }

    newrelic = {
      source  = "newrelic/newrelic"
      version = "3.39.1"
    }
  }
}