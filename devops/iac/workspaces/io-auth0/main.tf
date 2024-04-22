resource "auth0_prompt" "duumbi_prompt" {
  universal_login_experience     = "new"
  identifier_first               = false
  webauthn_platform_first_factor = true
}

resource "auth0_role" "owner" {
  name        = "owner"
  description = "Owner"
}