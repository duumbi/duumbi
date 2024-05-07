resource "azurerm_dns_zone" "duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  tags                = local.tags
}

resource "azurerm_dns_a_record" "duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "@"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = ["20.8.24.149"]
  tags                = local.tags
}

resource "azurerm_dns_mx_record" "duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "@"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 1800
  record {
    preference = 10
    exchange   = "mx1.privateemail.com"
  }
  record {
    preference = 10
    exchange   = "mx2.privateemail.com"
  }
  tags = local.tags
}

resource "azurerm_dns_txt_record" "duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "@"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 1800

  record {
    value = "v=spf1 include:spf.privateemail.com ~all"
  }
  record {
    value = var.dns_azure_duumbi_txt_record
  }
}

resource "azurerm_dns_cname_record" "www_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "www"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  record              = azurerm_static_web_app.site_swa.default_host_name
  tags                = local.tags
}

resource "azurerm_dns_cname_record" "status_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "status"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  record              = "statuspage.betteruptime.com"
  tags                = local.tags
}

resource "azurerm_dns_txt_record" "default_domainkey_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "default._domainkey"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 1800

  # DKIM key for duumbi.io
  record {
    value = var.dns_privateemail_dkim_txt_record
  }
}

resource "azurerm_dns_txt_record" "default_domainkey_github_challenge_duumbi_org_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "_github-challenge-duumbi-org"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 1800

  # GitHub key for duumbi.io
  record {
    value = var.dns_github_txt_record
  }
}

resource "azurerm_dns_a_record" "auth_local_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "auth.local"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = ["192.168.100.40"]
  tags                = local.tags
}