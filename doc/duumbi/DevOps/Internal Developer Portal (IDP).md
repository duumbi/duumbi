An internal developer portal is a self-service application and data store that lets developers and managers track and organize everything their engineering teams build and operate.

> [!info] Portal: [port.io](https://www.getport.io/)

## GitHub integration
### REST API endpoints for repositories

[Get a repository](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
```shell
> gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/duumbi/duumbi
```