output "port_azure_static_web_app_identifier" {
  value       = port_blueprint.azure_static_web_app.identifier
  description = "identity of azure static web app"
}

output "port_uptime_monitor_identifier" {
  value       = port_blueprint.uptime_monitor.identifier
  description = "identity of uptime monitor"
}

output "port_uptime_status_page_identifier" {
  value       = port_blueprint.uptime_status_page.identifier
  description = "identity of uptime status page"
}

output "port_iam_identifier" {
  value       = port_blueprint.iam.identifier
  description = "identity of IAM"
}

output "port_environment_identifier" {
  value       = port_blueprint.environment.identifier
  description = "identity of environment"
}

output "port_region_identifier" {
  value       = port_blueprint.region.identifier
  description = "identity of region"
}