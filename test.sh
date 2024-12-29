#!/bin/sh
echo SET VARIABLES
SERVER="http://localhost:8081"

echo POST
response=$(curl -X POST "$SERVER/checkout/preference" \
    -H "Content-Type: application/json" \
    -d '{"title": "Mi producto","quantity": 1, "unit_price": 2000}' \
)
echo $response
echo "\n"

echo CONGRATS
npx uri-scheme open exp://192.168.1.17:8081/--/checkout/congrats --android