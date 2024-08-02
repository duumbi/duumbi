## Authenticating using a Service Principal with a Client Secret

List the Subscriptions
``` shell
> az account list
```

Create the Service Principal
``` shell
> az ad sp create-for-rbac -n duumbi-tfc-credentials --role="Contributor" --scopes="/subscriptions/20000000-0000-0000-0000-000000000000"
```

