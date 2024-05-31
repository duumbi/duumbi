
## Prerequisites

### Doppler
Setup the [Doppler CLI](https://docs.doppler.com/docs/cli) for managing secrets
``` shell
> doppler setup
? Select a project: ias-k8s
? Select a config: [K8S_ENVIRONMENT]_io-[K8S_LOCATION]-aks

# Check
> doppler secrets download --no-file --format env
```

### Argo CD
Setup [Argo CD CLI](https://argo-cd.readthedocs.io/en/stable/cli_installation/)

``` shell
> brew install argocd
```

## K8S Configuration

``` shell
> doppler run -- ./config.sh
```
