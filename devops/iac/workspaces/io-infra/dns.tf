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

resource "azurerm_dns_a_record" "argocd_infra_ne_duumbi_io" {
  count = var.environment == "live" && var.aks_enable_ingress ? 1 : 0

  name                = "argocd.infra-ne"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = [azurerm_public_ip.ingress[0].ip_address]
  tags                = merge(local.tags, { "ingress" = "kubernetes", "service" = "argocd" })
}

resource "azurerm_dns_a_record" "api_site_ne_duumbi_io" {
  count = var.environment == "live" && var.aks_enable_ingress ? 1 : 0

  name                = "api.site-ne"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = [azurerm_public_ip.ingress[0].ip_address]
  tags                = merge(local.tags, { "ingress" = "kubernetes", "service" = "site" })
}


resource "azurerm_dns_a_record" "api_ne_duumbi_io" {
  count = var.environment == "live" && var.aks_enable_ingress ? 1 : 0

  name                = "api.duumbi-ne"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = [azurerm_public_ip.ingress[0].ip_address]
  tags                = merge(local.tags, { "ingress" = "kubernetes", "service" = "duumbi" })
}
### Local DNS records ---------------------------------------------------------
resource "azurerm_dns_a_record" "whoami_local_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "whoami.local"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = ["127.0.0.1"]
  tags                = local.tags
}

resource "azurerm_dns_a_record" "maildev_local_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "maildev.local"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 300
  records             = ["127.0.0.1"]
  tags                = local.tags
}