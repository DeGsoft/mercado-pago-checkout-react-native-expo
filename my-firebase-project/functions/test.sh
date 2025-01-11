#!/bin/bash
echo SET VARIABLES
server="http://127.0.0.1:5001/mp-checkout-react-native-expo/us-central1"
endpoint="$server/create_preference"
content_type="Content-Type:application/json"
data="{\"items\":[{\"title\": \"Mi producto test\",\"quantity\": 1, \"unit_price\": 1}]}"
echo POST
response=$(curl -X POST "$endpoint" -H "$content_type" -d "$data")
echo $response
echo "\n"