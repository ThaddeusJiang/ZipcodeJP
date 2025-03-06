# 使用官方 Bun 镜像作为基础镜像
FROM oven/bun:1.0.30-slim

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 bun.lock (如果存在)
COPY package.json ./

# 安装依赖
RUN bun install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["bun", "start"]
