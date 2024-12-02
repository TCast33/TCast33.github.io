curl -X POST -d '{
    "textQuery" : "Apartments for rent near $ZIPCODE"
  }' \
  -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: AIzaSyBVFY89pfgd00sa4QhQ4n81d8e5H7l5K1Q
  
  ' \
  -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \
  'https://places.googleapis.com/v1/places:searchText'