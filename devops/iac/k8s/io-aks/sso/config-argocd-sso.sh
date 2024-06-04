#!/bin/sh

echo "K8S Location: $K8S_LOCATION"
echo "K8S Environment: $K8S_ENVIRONMENT"

envsubst '$AZURE_TENANT_ID $ARGO_SSO_CLIENT_ID $ARGO_URL' < argocd-cm.yaml | kubectl apply -f -

export ARGO_SSO_CLIENT_SECRET_B64=$(echo $ARGO_SSO_CLIENT_SECRET | base64)
echo "Encoded secret: $ARGO_SSO_CLIENT_SECRET_B64"

