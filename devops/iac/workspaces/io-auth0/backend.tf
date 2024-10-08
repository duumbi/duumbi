terraform {
  required_version = "1.9.5"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      tags = ["io-auth0"]
    }
  }

  required_providers {

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.18"
    }

    auth0 = {
      source  = "auth0/auth0"
      version = "1.5.0"
    }
  }
}