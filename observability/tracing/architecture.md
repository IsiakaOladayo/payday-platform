# Tracing Architecture

Frontend Request
        ↓
API Service
        ↓
Worker
        ↓
PostgreSQL

Instrumentation:

Application
      ↓
OpenTelemetry SDK
      ↓
OTel Collector
      ↓
Jaeger
