locals {
  zone_name      = "duumbi.io"
  main_rg_name   = lower(format("%s-%s-%s-%s-rg", var.organization, var.project, var.environment, var.location_base.short_name))
  site_swa_name  = lower(format("%s-%s-%s-%s-site-swa", var.organization, var.project, var.environment, var.location_base.short_name))
  main_vnet_name = lower(format("%s-%s-%s-%s-vnet", var.organization, var.project, var.environment, var.location_base.short_name))

  tags = merge(
    var.tags_base,
    {
      organization = var.organization
      project      = var.project
      environment  = var.environment
    }
  )
}
