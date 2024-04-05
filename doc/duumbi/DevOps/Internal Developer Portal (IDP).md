---
tags:
  - devops
---
An internal developer portal is a self-service application and data store that lets developers and managers track and organize everything their engineering teams build and operate.

> [!info] Portal: [port.io](https://www.getport.io/)

## Deployment
Terraform Cloud Workspace: [internal-developer-portal](https://app.terraform.io/app/duumbi/workspaces/internal-developer-portal)
### Find your Port credentials
To get your Port API credentials go to your Port application, click on the ... button in the top right corner, and select Credentials. Here you can view and copy your `CLIENT_ID` and `CLIENT_SECRET`
## GitHub integration
### Ingest GitHub objects
>[!note]  Locate: ./github/[port-app-config.yml](https://docs.getport.io/build-your-software-catalog/sync-data-to-catalog/git/github/#port-app-configyml-file)

### REST API endpoints for repositories

[Get a repository](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
```shell
> gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/duumbi/duumbi
```