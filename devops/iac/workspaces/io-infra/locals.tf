locals {
  location_name           = var.location[var.region].name
  location_short_name     = var.location[var.region].short_name
  location_region_name    = var.location[var.region].region_name
  location_region_id      = var.location[var.region].region_id
  aks_location_short_name = var.location[format("%s-aks", var.region)].short_name
  aks_location_name       = var.location[format("%s-aks", var.region)].name

  zone_name      = "duumbi.io"
  main_rg_name   = lower(format("%s-%s-%s-%s-rg", var.organization, var.project, var.environment, local.location_short_name))
  main_vnet_name = lower(format("%s-%s-%s-%s-vnet", var.organization, var.project, var.environment, local.location_short_name))

  aks_rg_name      = lower(format("%s-%s-%s-%s-aks-rg", var.organization, var.project, var.environment, local.aks_location_short_name))
  aks_vnet_name    = lower(format("%s-%s-%s-%s-aks-vnet", var.organization, var.project, var.environment, local.aks_location_short_name))
  aks_name         = lower(format("%s-%s-%s-%s-aks", var.organization, var.project, var.environment, local.aks_location_short_name))
  aks_node_rg_name = lower(format("%s-%s-%s-%s-aks-node-rg", var.organization, var.project, var.environment, local.aks_location_short_name))

  site_swa_name = lower(format("%s-%s-%s-%s-site-swa", var.organization, var.project, var.environment, local.location_short_name))

  tags = merge(
    var.tags_base,
    {
      organization = var.organization
      project      = var.project
      environment  = var.environment
    }
  )
}
