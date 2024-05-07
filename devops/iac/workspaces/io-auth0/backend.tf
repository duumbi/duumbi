terraform {
  required_version = "1.8.2"

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
      version = "1.10.6"
    }

    auth0 = {
      source  = "auth0/auth0"
      version = "1.2.0"
    }
  }
}