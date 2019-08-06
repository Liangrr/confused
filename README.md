# vonic_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```



1. iconfont ---- 创建项目(多人维护)

# assets
  ## css
  ## img
  ## font
# components
  ## Form
  ## Table
  ## Button
  ## other
  ## Header
  ## Sider
# views
  ## Home.vue
    ### header/sider/router-view
  ## Dashbroad 首页
  ## Service 服务
    天气预报.vue
# utils
  api (封装axios)
  common.js
  ...

配置生产环境/测试环境
1. 创建 .env .env.prod (开发环境/正式环境)
2. 在 vue.config.js 配置 process.env.BASE_URL
3. package.json 配置 --mode prod (默认env开发环境)
