# Observability Architecture

## Objective

Provide monitoring, logging, alerting and tracing capabilities for the Payday platform.

## Components

Metrics:
- Prometheus
- kube-state-metrics
- node-exporter

Visualization:
- Grafana

Logging:
- Loki
- Promtail

Tracing:
- OpenTelemetry
- Jaeger

Alerting:
- Alertmanager

## Metrics Flow

Application Pods
        ↓
Prometheus
        ↓
Grafana

## Logging Flow

Pods
 ↓
Promtail
 ↓
Loki
 ↓
Grafana

## Tracing Flow

Application
    ↓
OpenTelemetry
    ↓
Jaeger
