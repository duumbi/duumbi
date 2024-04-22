# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "0U4NzxCopAr1FJwfJjNcZXzEuq0V4BKV"
# resource "auth0_client" "duumbi_client" {
#   allowed_clients                       = []
#   allowed_logout_urls                   = ["http://localhost:5173"]
#   allowed_origins                       = []
#   app_type                              = "spa"
#   callbacks                             = ["http://localhost:5173"]
#   client_aliases                        = []
#   client_metadata                       = {}
#   cross_origin_auth                     = false
#   cross_origin_loc                      = null
#   custom_login_page                     = null
#   custom_login_page_on                  = true
#   description                           = null
#   encryption_key                        = {}
#   form_template                         = null
#   grant_types                           = ["authorization_code", "implicit", "refresh_token", "client_credentials"]
#   initiate_login_uri                    = null
#   is_first_party                        = true
#   is_token_endpoint_ip_header_trusted   = false
#   logo_uri                              = "https://duumbi.io/img/logo.png"
#   name                                  = "Default App"
#   oidc_backchannel_logout_urls          = []
#   oidc_conformant                       = true
#   organization_require_behavior         = null
#   organization_usage                    = null
#   require_pushed_authorization_requests = false
#   sso                                   = false
#   sso_disabled                          = false
#   web_origins                           = ["http://localhost:5173"]
#   jwt_configuration {
#     alg                 = "RS256"
#     lifetime_in_seconds = 36000
#     scopes              = {}
#     secret_encoded      = false
#   }
#   native_social_login {
#     apple {
#       enabled = false
#     }
#     facebook {
#       enabled = false
#     }
#   }
#   refresh_token {
#     expiration_type              = "expiring"
#     idle_token_lifetime          = 1296000
#     infinite_idle_token_lifetime = false
#     infinite_token_lifetime      = false
#     leeway                       = 0
#     rotation_type                = "rotating"
#     token_lifetime               = 2592000
#   }
# }
