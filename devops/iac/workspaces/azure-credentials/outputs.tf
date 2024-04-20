output "run_client_id" {
  value       = azuread_application.tfc_application.client_id
  description = "The Azure Client ID runs will use to authenticate."
}