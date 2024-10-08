data "terraform_remote_state" "idp" {
  backend = "remote"
  config = {
    organization = "duumbi"
    workspaces = {
      name = "internal-developer-portal"
    }
  }
}

data "terraform_remote_state" "infra" {
  count = var.environment == "live" ? 1 : 0

  backend = "remote"
  config = {
    organization = "duumbi"
    workspaces = {
      name = format("%s-%s-infra", lower(var.environment), lower(var.project))
    }
  }
}

resource "auth0_prompt" "duumbi_prompt" {
  universal_login_experience     = "new"
  identifier_first               = false
  webauthn_platform_first_factor = false
}

resource "auth0_role" "owner" {
  name        = "owner"
  description = "Owner"
}
