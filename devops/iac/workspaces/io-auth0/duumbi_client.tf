resource "auth0_client" "duumbi_client" {
  name                                = "Duumbi Web Application"
  description                         = local.duumbi_client_desc
  app_type                            = "spa"
  custom_login_page_on                = true
  is_token_endpoint_ip_header_trusted = false
  oidc_conformant                     = true
  allowed_clients                     = []
  allowed_logout_urls                 = var.auth0_urls["allowed_logout"]
  callbacks                           = var.auth0_urls["callbacks"]
  web_origins                         = var.auth0_urls["web_origins"]
  logo_uri                            = "https://duumbi.io/img/duumbi.png"
  grant_types                         = ["authorization_code", "implicit", "refresh_token"]
  allowed_origins                     = []
  client_metadata                     = {}

  native_social_login {
    apple {
      enabled = false
    }
    facebook {
      enabled = false
    }
  }

  jwt_configuration {
    alg                 = "RS256"
    lifetime_in_seconds = 36000
    scopes              = {}
    secret_encoded      = false
  }
  refresh_token {
    expiration_type              = "expiring"
    idle_token_lifetime          = 1296000
    infinite_idle_token_lifetime = false
    infinite_token_lifetime      = false
    leeway                       = 0
    rotation_type                = "rotating"
    token_lifetime               = 2592000
  }
}

resource "port_entity" "duumbi_iam_client_entity" {
  count = var.environment == "live" ? 1 : 0

  identifier = lauth0_client.duumbi_client.id
  title      = auth0_client.duumbi_client.name
  blueprint  = data.terraform_remote_state.idp.outputs.port_iam_identifier
  properties = {
    "string_props" = {
      "tenant"            = local.tenant
      "applicationDomain" = local.app_domain
      "applicationType"   = auth0_client.duumbi_client.app_type
    }
  }
  relations = {
    single_relations = {
      "swa" = data.terraform_remote_state.infra.outputs.azurerm_site_swa_name
    }
  }
}
