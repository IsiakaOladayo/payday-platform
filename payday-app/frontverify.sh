#!/bin/bash
cd ~/payday-app

echo "🔄 Resetting port-forward..."

# Kill all kubectl port-forward processes
pkill -f "kubectl port-forward" 2>/dev/null
echo "✅ Killed existing port-forwards"

# Start new port-forward
kubectl port-forward svc/payday-frontend-service -n staging 3000:80 > /dev/null 2>&1 &
PF_PID=$!
echo "✅ Started port-forward on PID: $PF_PID"

# Wait for it to be ready
sleep 2

# Test connection
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Frontend is accessible at: http://localhost:3000"
    
    # Try to open in browser
    if command -v explorer.exe &> /dev/null; then
        explorer.exe http://localhost:3000
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:3000
    else
        echo "🌐 Open this URL manually: http://localhost:3000"
    fi
else
    echo "❌ Failed to connect. Check if service is running:"
    echo "   kubectl get pods -n staging"
fi
