#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t pdes-tp-buggysoft .
docker tag pdes-tp-buggysoft:latest glmaljkovich/pdes-tp-buggysoft
docker push glmaljkovich/pdes-tp-buggysoft
