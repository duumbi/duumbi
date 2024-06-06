# K8S

- Namespaces:
    - infra
    - argocd
- Services
    - [Ingress NGINX Controller](https://kubernetes.github.io/ingress-nginx/)
    - [Cloud native certificate management](https://cert-manager.io/)
    - [ArgoCD](https://argo-cd.readthedocs.io/)


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

### just
Setup [just](https://github.com/casey/just)

``` shell
> brew install just
```


## K8S Setup

### 1, Initialize Doppler CLI and Azure CLI
``` shell
> just init
```

### 2, Install K8s resources
``` shell
> just install
```

Check initial secret:
``` shell
> kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

If secrets "argocd-initial-admin-secret" not found.
``` shell
# Invalidating Admin Credentials:
> kubectl patch secret argocd-secret -n argocd -p '{"data": {"admin.password": null, "admin.passwordMtime": null}}'

# Restart Argo CD
just argocd-restart
```

### 3, Configure ArgoCD
> **_NOTE:_**  Before you start, check the Argo CD URL.
``` shell
> just argocd-config
```

Edit the argocd-secret:
``` shell
> kubectl edit secret argocd-secret -n argocd
```

Restart Argo CD:
``` shell
just argocd-restart
```

## K8S Uninstall
``` shell
> just uninstall
```