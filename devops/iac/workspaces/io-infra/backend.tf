terraform {
  required_version = "1.8.1"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      tags = ["io-infra"]
    }
  }

  required_providers {
    port = {
      source  = "port-labs/port-labs"
      version = "1.10.6"
    }

    doppler = {
      source  = "DopplerHQ/doppler"
      version = "1.7.1"
    }

    betteruptime = {
      source  = "BetterStackHQ/better-uptime"
      version = "0.8.0"
    }
  }
}