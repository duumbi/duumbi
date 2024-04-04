config {
  module              = true
  disabled_by_default = false
}

plugin "terraform" {
    enabled = true
}

plugin "azurerm" {
  enabled = true
  version = "0.26.0"
  source  = "github.com/terraform-linters/tflint-ruleset-azurerm"
}

rule "terraform_naming_convention" {
  enabled = true

  #Require specific naming structure
  variable {
    format = "snake_case"
  }

  locals {
    format = "snake_case"
  }

  output {
    format = "snake_case"
  }
}

rule "terraform_unused_declarations" {
  enabled = false
}

rule "terraform_required_providers" {
  enabled = false
}