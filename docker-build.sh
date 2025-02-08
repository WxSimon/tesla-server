#!/bin/bash

# 设置变量
DOCKER_USERNAME="wxsimon"  # 替换为您的 Docker Hub 用户名
IMAGE_NAME="tesla-server"
VERSION=$(date +%Y%m%d_%H%M%S) 

# 构建 Docker 镜像
echo "Building Docker image..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME:$VERSION .
docker tag $DOCKER_USERNAME/$IMAGE_NAME:$VERSION $DOCKER_USERNAME/$IMAGE_NAME:latest

# 登录到 Docker Hub
echo "Logging in to Docker Hub..."
docker login

# 推送镜像到 Docker Hub
echo "Pushing image to Docker Hub..."
docker push $DOCKER_USERNAME/$IMAGE_NAME:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME:latest

echo "Done! Image has been pushed to Docker Hub"
echo "Image: $DOCKER_USERNAME/$IMAGE_NAME:$VERSION"