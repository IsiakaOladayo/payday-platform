# High Latency Runbook

## Detection

Alert:

HighAPILatency

Threshold:

P99 > 300ms

## Investigation

Check pods:

```bash
kubectl get pods -A
```

Check metrics:

```bash
kubectl top pods
```

Inspect logs:

```bash
kubectl logs POD_NAME
```

## Recovery

Scale deployment:

```bash
kubectl scale deployment api \
--replicas=5
```
