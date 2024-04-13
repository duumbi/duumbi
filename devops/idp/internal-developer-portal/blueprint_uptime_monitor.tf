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
      "company_name" = {
        title    = "Company Name"
        required = true
      }

      "company_url" = {
        title    = "Company URL"
        format   = "url"
        icon     = "Link"
        required = true
      }

      "subdomain" = {
        title    = "Subdomain"
        required = true
      }
    }
  }

  relations = {
    "repository" = {
      title    = "Monitor"
      required = false
      target   = port_blueprint.uptime_monitor.identifier
      many     = false
    }
  }
}
