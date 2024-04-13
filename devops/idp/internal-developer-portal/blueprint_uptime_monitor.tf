resource "port_blueprint" "uptime_monitor" {
  identifier  = "uptime_monitor"
  title       = "Uptime Monitor"
  icon        = "Alert"
  description = "Better Stack Uptime Monitor"

  properties = {
    string_props = {
      "monitorType" = {
        title    = "Monitor Type"
        required = true
        enum     = ["status", "expected_status_code", "keyword", "Java", "keyword_absence", "ping", "tcp", "udp", "smtp", "pop", "imap", "playwright"]
      }
      "url" = {
        title    = "Url"
        format   = "url"
        icon     = "Link"
        required = true
      }
    }
  }
}

resource "port_blueprint" "uptime_status_page" {
  identifier  = "uptime_status_page"
  title       = "Uptime Status Page"
  icon        = "Alert"
  description = "Better Stack Uptime Status Page"

  properties = {
    string_props = {
      "companyName" = {
        title    = "Company Name"
        required = true
      }

      "companyUrl" = {
        title    = "Company URL"
        format   = "url"
        icon     = "Link"
        required = true
      }

      "domain" = {
        title    = "Domain"
        required = true
      }

      "subdomain" = {
        title    = "Subdomain"
        required = true
      }
    }
  }



  calculation_properties = {
    "statusUrl" = {
      title       = "Status Url"
      type        = "string"
      format      = "url"
      icon        = "Link"
      calculation = "'https://' + .properties.domain"
    }
  }

  relations = {
    "monitor" = {
      title    = "Monitor"
      required = false
      target   = port_blueprint.uptime_monitor.identifier
      many     = false
    }
  }
}
