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
    value = "4cv262m6mvm7718jlj7bq5tdr1mrb9lk"
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

resource "azurerm_dns_txt_record" "default_domainkey_duumbi_io" {
  count = var.environment == "live" ? 1 : 0

  name                = "default._domainkey"
  zone_name           = local.zone_name
  resource_group_name = azurerm_resource_group.main_rg.name
  ttl                 = 1800

  # DKIM key for duumbi.io
  record {
    value = "v=DKIM1;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtYXo1d08UwcX0fTqQKNIKchipsSu82F6DbmgmwPcBkpia3uR664Ra5N6OAtt9lEIGMZprqUVEhgtZKiZd8A98GWFjdypELI6Pju8nq8gqdzowl8o0UlYrjWYMe+fheT6WOFPpAMTDMDt2jlSfocO00N3VJIhINcM93cJyGGYsY8DRmir7VymZyuYKCYbNFTHGu9f1JnHgRKVgppPp7T5il77Cpr//H7sLcpUIRxomug05to4w3cMODDX588veWf+dP4Aymo5K5zrAKJ9r2Ukyd2/YmzHhxtP2kEObZlDUs22SZAjsZsksGMWVNNJdnwH+ry5hdM36jhm0+53jxS4HwIDAQAB"
  }

}