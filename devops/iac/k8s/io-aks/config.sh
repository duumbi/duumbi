#!/bin/sh

echo "K8S Location: $K8S_LOCATION"
echo "K8S Environment: $K8S_ENVIRONMENT"

export AKS_LOADBALANCER_IP=$(az network public-ip show -g duumbi-io-$K8S_ENVIRONMENT-$K8S_LOCATION-aks-node-rg -n duumbi-io-$K8S_ENVIRONMENT-$K8S_LOCATION-aks-ingress-ip | jq -c --raw-output '.ipAddress')
echo "AKS LoadBalancer IP: $AKS_LOADBALANCER_IP"

echo "\nCreating namespaces"
kubectl create namespace infra
kubectl label namespace infra cert-manager.io/disable-validation=true
kubectl create namespace argocd

echo "\nAdding Helm repos"
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add jetstack https://charts.jetstack.io
helm repo update

echo "\nInstalling Helm charts"
helmfile apply --file helmfile.yaml sync

echo "\nCreating Cluster Issuer"
envsubst < cluster-issuer.yaml | kubectl apply -f -

echo "\nInstalling ArgoCD"
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

echo "\nCreating ArgoCD Ingress"
envsubst < argocd-ingress.yaml | kubectl apply -f -