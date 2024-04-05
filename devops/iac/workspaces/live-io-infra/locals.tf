locals {
  rg_name = lower(format("%s-%s-%s-%s-rg", var.organization, var.environment, var.project, var.location_base.short_name))

  tags = merge(
    var.tags_base,
    {
      organization = var.organization
      project      = var.project
      environment  = var.environment
    }
  )
}
