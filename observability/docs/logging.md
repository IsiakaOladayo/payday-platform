# Logging Architecture

Pods
 ↓
Promtail
 ↓
Loki
 ↓
Grafana

Retention:
7 days

Sources:

- API logs
- Worker logs
- Kubernetes events
