# 使用 Node.js 官方镜像作为基础镜像，并指定平台
FROM --platform=linux/amd64 node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制源代码
COPY . .

# 暴露端口（根据您的应用实际使用的端口进行修改）
EXPOSE 9099

# 使用 PM2 运行应用
RUN npm install pm2 -g
CMD ["pm2-runtime", "pm2.json"] 