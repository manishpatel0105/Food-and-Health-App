#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

PROJECT_ID="gen-lang-client-0448582722"
IMAGE_NAME="gcr.io/${PROJECT_ID}/nutrimind-ai"
SERVICE_NAME="nutrimind-ai"
REGION="us-central1"

echo "Setting Google Cloud project to ${PROJECT_ID}..."
gcloud config set project ${PROJECT_ID}

echo "Submitting docker build to Google Cloud Build..."
gcloud builds submit --tag ${IMAGE_NAME}

echo "Deploying container to Google Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated

echo "Deployment complete! 🚀"
