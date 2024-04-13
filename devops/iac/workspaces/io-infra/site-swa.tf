resource "azurerm_static_web_app" "site_swa" {
  name                = local.site_swa_name
  location            = var.location_base.name
  resource_group_name = azurerm_resource_group.main_rg.name
  sku_size            = "Free"
  sku_tier            = "Free"
  tags                = local.tags
  app_settings        = {}
}

resource "betteruptime_monitor" "site_monitor" {
  monitor_type         = "status"
  url                  = "https://${local.zone_name}"
  call                 = false
  email                = true
  push                 = false
  sms                  = false
  check_frequency      = 1800
  follow_redirects     = true
  http_method          = "get"
  maintenance_timezone = "UTC"
  maintenance_days     = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
  paused               = false
  pronounceable_name   = local.zone_name
  recovery_period      = 3600
  regions              = ["us", "eu", "as", "au"]
  playwright_script    = "const { test, expect } = require('@playwright/test');\r\n\r\ntest('has title', async ({ page }) => {\r\n  await page.goto('https://betterstack.com/')\r\n  await expect(page).toHaveTitle(/Better Stack/)\r\n});\r\n"
  remember_cookies     = true
  request_timeout      = 30
  ssl_expiration       = 7
  verify_ssl           = true
}

resource "betteruptime_status_page" "site_status_page" {
  announcement_embed_visible = true
  automatic_reports          = false
  company_name               = title(var.organization)
  company_url                = "https://${local.zone_name}"
  custom_domain              = "status.${local.zone_name}"
  design                     = "v2"
  hide_from_search_engines   = false
  history                    = 90
  layout                     = "vertical"
  min_incident_length        = 0
  password_enabled           = false
  subdomain                  = var.organization
  subscribable               = false
  theme                      = "dark"
  timezone                   = "Budapest"
}

resource "betteruptime_status_page_resource" "site_status_page_site" {
  public_name    = local.zone_name
  resource_type  = "Monitor"
  widget_type    = "response_times"
  resource_id    = betteruptime_monitor.site_monitor.id
  status_page_id = betteruptime_status_page.site_status_page.id
}

resource "port_entity" "site_swa_entity" {
  identifier = local.site_swa_name
  title      = "Static Web App - ${local.zone_name}"
  blueprint  = data.terraform_remote_state.idp.outputs.port_azure_static_web_app_identifier
  properties = {
    "string_props" = {
      "name"              = local.site_swa_name
      "defaultHostName"   = azurerm_static_web_app.site_swa.default_host_name
      "resourceGroupName" = azurerm_resource_group.main_rg.name
      "skuTier"           = azurerm_static_web_app.site_swa.sku_tier
      "defaultDomain"     = local.zone_name
    }
  }
  relations = {
    single_relations = {
      "environment" = var.environment
      "monitor"     = betteruptime_monitor.site_monitor.id
    }
  }
}

resource "port_entity" "site_monitor" {
  identifier = betteruptime_monitor.site_monitor.id
  blueprint  = data.terraform_remote_state.idp.outputs.port_uptime_monitor_identifier
  title      = betteruptime_monitor.site_monitor.pronounceable_name

  properties = {
    "string_props" = {
      "monitorType" = betteruptime_monitor.site_monitor.monitor_type
      "url"         = betteruptime_monitor.site_monitor.url
    }
  }

}
