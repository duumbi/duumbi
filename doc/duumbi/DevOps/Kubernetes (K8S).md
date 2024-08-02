### Connect

Connect to cluster using command line tooling

#### Prerequisites
- [Azure CLI](https://go.microsoft.com/fwlink/?linkid=872496)
- [kubectl](https://go.microsoft.com/fwlink/?linkid=2233742)
- [kubelogin](https://go.microsoft.com/fwlink/?linkid=2233743)
#### Set cluster context

``` shell
# Login to your azure account

> az login
```

``` shell
# Set the cluster subscription

> az account set --subscription {{subscription_id}}
```

``` shell
# Download cluster credentials

> az aks get-credentials --resource-group {{resource_group_id}} --name {{aks_name}} --overwrite-existing
```

``` shell
# Use kubelogin plugin for authentication

> kubelogin convert-kubeconfig -l azurecli
```

## NGINX Ingress

Install NGINX Ingress Controller
``` shell
# Add the NGINX Helm Repository
> helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
> helm repo update

# Install the Helm chart
> helm install nginx-ingress ingress-nginx/ingress-nginx \
--namespace ingress --create-namespace\
--set controller.replicaCount=2 \
--set controller.nodeSelector."kubernetes\.io/os"=linux \
--set controller.admissionWebhooks.patch.nodeSelector."kubernetes\.io/os"=linux \
--set defaultBackend.nodeSelector."kubernetes\.io/os"=linux
```

## Cert Manager
``` shell
> export CERT_MANAGER_TAG=v1.14.5

# Label the ingress-basic namespace to disable resource validation
> kubectl label namespace ingress cert-manager.io/disable-validation=true

# Add the Jetstack Helm repository
> helm repo add jetstack https://charts.jetstack.io

# Update your local Helm chart repository cache
> helm repo update

# Install the cert-manager Helm chart
> helm install cert-manager jetstack/cert-manager \
  --namespace ingress \
  --version $CERT_MANAGER_TAG \
  --set installCRDs=true \
  --set nodeSelector."kubernetes\.io/os"=linux
```

## Argo CD
``` shell
# Create namespace
> kubectl create namespace argocd

> kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

```