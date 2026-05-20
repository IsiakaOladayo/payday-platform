# Observability Deployment

Namespaces:

```bash
kubectl apply -f helm/namespaces/
```

Prometheus Stack:

```bash
helm repo add prometheus-community \
https://prometheus-community.github.io/helm-charts

helm upgrade --install monitoring \
prometheus-community/kube-prometheus-stack \
-n monitoring \
-f helm/prometheus-stack/values.yaml
```

Loki:

```bash
helm repo add grafana \
https://grafana.github.io/helm-charts

helm upgrade --install loki \
grafana/loki \
-n logging \
-f helm/loki-stack/values.yaml
```

Promtail:

```bash
helm upgrade --install promtail \
grafana/promtail \
-n logging \
-f helm/promtail/values.yaml
```
