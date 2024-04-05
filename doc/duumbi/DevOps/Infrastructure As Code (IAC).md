## Terraform Cloud

### Azure
#### Bootstrapping trust between a TFC workspace and Azure
Dynamic provider credentials for HashiCorp [#Terraform]([HashiCorp Terraform - Provision & Manage any Infrastructure](https://www.hashicorp.com/products/terraform)) Cloud provide a simple and safe authentication workflow for Vault and official cloud providers.

__Deployment__
```shell
# plan
> terraform plan

# apply
> terraform apply
```

[Blog](https://www.hashicorp.com/blog/terraform-cloud-adds-dynamic-provider-credentials-vault-official-cloud-providers) | [Credentials with the Azure](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/azure-configuration) | [Examples](https://github.com/hashicorp/terraform-dynamic-credentials-setup-examples/blob/main/azure/README.md#how-to-use)
