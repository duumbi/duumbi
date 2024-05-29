provider "kubernetes" {
  config_path = "~/.kube/config"
}

provider "port" {
  client_id = var.port_client_id
  secret    = var.port_secret
}