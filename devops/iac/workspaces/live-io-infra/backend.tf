terraform {
  required_version = "~> 1.7.5"

  cloud {
    hostname     = "app.terraform.io"
    organization = "duumbi"
    workspaces {
      name = "live-io-infra"
    }
  }
}