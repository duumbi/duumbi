terraform {
  required_version = ">= 1.7.5"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      name = "internal-developer-portal"
    }
  }

  required_providers {
    port = {
      source  = "port-labs/port-labs"
      version = ">= 1.10.6"
    }
  }
}