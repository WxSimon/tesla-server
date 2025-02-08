# 特行助手

"特行助手" 是一款基于 [teslamate](https://github.com/teslamate-org/teslamate) 的出行记录查看工具。展示数据源基于 teslamate，使用前请确保已经部署好 teslamate 服务。

**截图:**

- 出行列表

![](http://static.simoncode.top/picgo/2025-02-08_09-06_副本.png)

- 日期统计

![](http://static.simoncode.top/picgo/20250208101722938.png)

- 单次行程详情

![](http://static.simoncode.top/picgo/2025-02-08_10-17_0_副本.png)

- 充电信息

![](http://static.simoncode.top/picgo/20250208102024725.png)

## 部署

### Docker 部署(推荐)

```shell
docker run -p 9099:9099 \
 -e PORT=9099 \
 -e DB_HOST=#teslameta 数据库地址 \
 -e DB_PORT=#teslameta 数据库端口 \
 -e DB_USERNAME=#teslameta 数据库用户名 \
 -e DB_PASSWORD=#teslameta 数据库密码 \
 -e DB_DATABASE=#teslameta 数据库 \
 -e AMAP_KEY=#高德地图 KEY \
 --restart=always \
 --name tesla-server \
 -d wxsimon/tesla-server:latest
```

环境变量含义:

| 变量 | 含义 | 默认值 |
| --- | --- | --- |
| PORT | 服务端口 | 9099 |
| DB_HOST | teslameta 数据库地址 | 127.0.0.1 |
| DB_PORT | teslameta 数据库端口 | 5432 |
| DB_USERNAME | teslameta 数据库用户名 | postgres |
| DB_PASSWORD | teslameta 数据库密码 | - |
| DB_DATABASE | teslameta 数据库 | teslameta |
| AMAP_KEY | 高德地图 KEY | - |

高德地图 KEY 获取流程：[参考文档](https://lbs.amap.com/api/webservice/guide/create-project/get-key)

服务启动后，访问: `http://host:9099` 即可


### 本地部署

1. 克隆项目

```bash
git clone https://github.com/WxSimon/tesla-server.git
cd tesla-server
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

创建 `.env` 文件并配置以下环境变量：

```bash
PORT=9099
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=teslamate
AMAP_KEY=your_amap_key
```

4. 启动服务

```bash
npm run start
```

服务启动后，访问: `http://localhost:9099` 即可

### 开发说明

- Node.js 版本要求：>= 14.0.0
- 本项目使用 JavaScript 开发
- 开发模式启动：`npm run dev`
- 构建：`npm run build`

### 问题反馈

如果您在使用过程中遇到任何问题，欢迎在 [Issues](https://github.com/WxSimon/tesla-server/issues) 中提出。

### License

MIT