#!/bin/bash

# Read environment variables
BASE_URL=${BASE_URL}

# Create the environment file content
ENV_CONFIG="export const environment = {
  production: true,
  baseUrl: '$BASE_URL'
};"

# Write the environment file
echo "$ENV_CONFIG" > ./src/environments/environment.prod.ts

echo "Environment file generated at ./src/environments/environment.prod.ts"