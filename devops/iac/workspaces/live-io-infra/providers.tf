provider "azurerm" {
  features {}
}

provider "port" {
  client_id = var.port_client_id
  secret    = var.port_secret
}

provider "doppler" {
}