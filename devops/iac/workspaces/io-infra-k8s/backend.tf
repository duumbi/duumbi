terraform {
  required_version = "1.8.4"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      name = "live-io-infra-k8s"
    }
  }

  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.30.0"
    }

    port = {
      source  = "port-labs/port-labs"
      version = "2.0.3"
    }
  }
}