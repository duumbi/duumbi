resource "auth0_branding_theme" "duumbi" {
  display_name = "Duumbi Theme"

  borders {}
  colors {}
  fonts {
    title {}
    subtitle {}
    links {}
    input_labels {}
    buttons_text {}
    body_text {}
  }
  page_background {
    background_color = "#0891B2"
    page_layout      = "right"
  }
  widget {
    logo_url = "https://duumbi.io/img/duumbi.png"
  }
}
