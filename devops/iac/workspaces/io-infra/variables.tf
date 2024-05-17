variable "organization" {
  type        = string
  description = "Organization name"

  default = "duumbi"

}

variable "project" {
  type        = string
  description = "Project name"

  default = "io"
}

variable "environment" {
  type        = string
  description = "Environment name"

  validation {
    condition     = contains(["live", "stage"], var.environment)
    error_message = "Valid values for var: environment are (live, stage)"
  }
}

variable "region" {
  type        = string
  description = "Region name"

  validation {
    condition     = contains(["eu", "us", "au"], var.region)
    error_message = "Valid values for var: region are (eu, us, au)"
  }
}

variable "location" {
  type = map(object({
    name        = string
    short_name  = string
    region_id   = string
    region_name = string
  }))
  description = "The Azure region in which region bound resources will be deployed. Please see: https://azure.microsoft.com/en-gb/global-infrastructure/geographies/"

  default = {
    "eu" = {
      name        = "westeurope"
      short_name  = "we"
      region_id   = "eu"
      region_name = "Europe"
    },
    "eu-aks" = {
      name        = "northeurope"
      short_name  = "ne"
      region_id   = "eu"
      region_name = "Europe"
    }
  }
}

variable "tags_base" {
  type        = map(string)
  description = "If specified, will set the default tags for all resources deployed by this module where supported"

  default = {
    managed_by = "terraform"
  }
}

variable "vnet_address_space" {
  type        = list(string)
  default     = ["10.0.0.0/16"]
  description = "The address space that is used in the virtual networks"
}

variable "subnets_address_prefixes" {
  type = map(list(string))
  default = {
    "aks" = ["10.0.0.0/19"] # AKS Subnet - cidrsubnet("10.0.0.0/16", 3, 0)
  }
  description = "The address prefixes that are used in the subnets"
}

variable "kubernetes_version" {
  type        = string
  description = "Version of Kubernetes specified when creating the AKS managed cluster"
}

variable "aks_network_service_cidr" {
  type        = string
  default     = "10.0.64.0/19" # AKS Network Range - cidrsubnet("10.0.0.0/16", 3, 2)
  description = "The Network Range used by the Kubernetes service."
}

variable "aks_network_dns_service_ip" {
  type        = string
  default     = "10.0.64.10"
  description = "IP address within the Kubernetes service address range that will be used by cluster service discovery (kube-dns)."
}

variable "authorized_ip_to_aks_api_server" {
  type        = list(string)
  description = "Set of authorized IP ranges to allow access to API server"
}

# -- AKS NODE POOL ------------------------------------------------------------------------------------------------------------------------------------------------------|
# Name              | CPU      | vCPU | Memory  | Temp Storage | Premium Storage | Ephemeral OS Disk | IOPS | Net Mbps | Price ne | Quota Name                   | Quota |
# ------------------|----------|------|---------|--------------|-----------------|-------------------|------|----------|-----------------------------------------|-------|
# Standard_D2ads_v5 |  AMD 3rd |    2 |   8 GiB |        75 GB |       Supported |         Supported | 9000 |    12500 | $0.115/h | Standard DADSv5 Family vCPUs |     0 |
# Standard_D2ds_v4  | Xeon 3rd |    2 |   8 GiB |        75 GB |       Supported |         Supported | 9000 |     5000 | $0.126/h |   Standard DSv4 Family vCPUs |    10 |
# Standard_D2ds_v5  | Xeon 3rd |    2 |   8 GiB |        75 GB |       Supported |         Supported | 9000 |    12500 | $0.126/h |   Standard DSv5 Family vCPUs |     0 |
# Standard_D2pds_v5 |      Arm |    2 |   8 GiB |        75 GB |       Supported |         Supported | 9375 |    12500 | $0.101/h | Standard DPDSv5 Family vCPUs |    10 |
variable "vm_size_aks_system_pool" {
  type        = string
  description = "The size of the Virtual Machine"
  default     = "Standard_D2ads_v5"
}

variable "vm_size_aks_user_spot_pool" {
  type        = string
  description = "The size of the Virtual Machine"
  default     = "Standard_D2pds_v5"
}

# PORT.IO ---------------------------------------------------------------------
variable "port_client_id" {
  type        = string
  default     = ""
  sensitive   = true
  description = "Port Client ID. Get it from port UI"
}

variable "port_secret" {
  type        = string
  default     = ""
  sensitive   = true
  description = "Port Secret. Get it from port UI"
}

# DOPPLER ---------------------------------------------------------------------
variable "doppler_config" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_CONFIG environment variable"
}

variable "doppler_environment" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_ENV environment variable"
}

variable "doppler_project" {
  type        = string
  sensitive   = true
  description = "value for the DOPPLER_PROJECT environment variable"
}

variable "dns_azure_duumbi_txt_record" {
  type        = string
  sensitive   = true
  description = "Azure DNS TXT record for duumbi.io"
}

variable "dns_github_txt_record" {
  type        = string
  sensitive   = true
  description = "value for the DNS TXT record for the GitHub challenge"
}

variable "dns_privateemail_dkim_txt_record" {
  type        = string
  sensitive   = true
  description = "value for the DNS TXT record for the privateemail DKIM key"
}

variable "duumbi_aks_administrators_object_id" {
  type        = string
  sensitive   = true
  description = "Azure AD Object ID of the duumbi.io AKS administrators"
}
