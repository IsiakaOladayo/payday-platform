cd ~/payday-app/frontend && \
echo "=== BUILD STATUS ===" && \
if [ -d "dist" ]; then echo "✅ Build exists: $(du -sh dist | cut -f1)"; else echo "❌ No build"; fi && \
echo "=== DOCKER STATUS ===" && \
if docker images | grep -q "payday-frontend"; then echo "✅ Docker image exists"; else echo "❌ No Docker image"; fi && \
echo "=== HELM STATUS ===" && \
if [ -d "helm" ]; then echo "✅ Helm chart exists"; else echo "❌ No Helm chart"; fi
