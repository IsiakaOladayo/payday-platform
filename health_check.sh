#!/bin/bash

echo "----STARTING SYSTEM AUDIT------"

date

echo "-------------------------------"


# 1. check if SSH is running

if systemctl is-active --quiet ssh; then
    echo "[PASS] SSH Service is active"

else

    echo "[FAIL] SSH Service is DOWN"

fi

# 2. Check Firewall Status
if sudo ufw status | grep -q "active"; then

    echo "[PASS] Firewall is enabled"

else

    echo "[WARN] Firewall is Disabled!"

fi


# 3.  Check Disk Usage (Alert if over 80%)

DISK_USAGE=$(df / | grep / | awk ' { print $5 }' | sed 's/%//g')

if [ "$DISK_USAGE" -gt 80 ]; then

     echo "[WARN] Disk usage is high: ${DISK_USAGE}%"

else
     echo " [PASS] Disk usage is at ${DISK_USAGE}%"

fi

echo "--------------------------------"

echo "Audit complete."

