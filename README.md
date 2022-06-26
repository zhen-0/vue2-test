## **文档结构**

> [前端工程化那些事](https://juejin.cn/post/6844904132512317453#heading-17)
> 
> [Vue 前端代码开发规范](https://juejin.cn/post/7030637855290425374)

```
├── .editorconfig
├── .gitignore   
├── babel.config.js
├── package-lock.json
├── package.json     //安装依赖
├── pnpm-lock.yaml
├── public           //公共静态文件
│  ├── favicon.ico
│  └── index.html
├── README.md    
├── src
│  ├── api          //接口相关
│  │  ├── index.js  //接口模块入口
│  │  └── request.js //axios封装
│  ├── App.vue
│  ├── assets        //开发静态资源
│  │  ├── consts     //常量
│  │  │  ├── content-type.js  //常量模块
│  │  │  └── index.js  //常量入口文件
│  │  ├── css          //css
│  │  ├── icons        //图标
│  │  ├── images       //图片
│  │  └── medias       //媒体（音视频）
│  ├── components       //公共组件
│  │  ├── base          //公共基础组件
│  │  │  └── index.vue
│  │  └── custom        //公共业务组件
│  │    └── index.vue
│  ├── config           //配置文件
│  │  └── index.js
│  ├── main.js          //入口文件
│  ├── router           //路由
│  │  ├── index.js      
│  │  └── routes.js     //路由表
│  ├── store            //vuex
│  │  ├── getters.js    
│  │  ├── index.js      //vuex入口
│  │  └── states.js     
│  ├── utils            //公共方法
│  │  ├── fn1.js
│  │  ├── fn2.js
│  │  └── index.js      //公共方法入口
│  └── views            //页面
│    └── format.vue
└── vue.config.js       //vue配置
```

### 规范commit 

参考链接[Git Commit 规范与配置](https://juejin.cn/post/7091276495972204580#heading-9)

提交时，必须用英文冒号并且冒号后加空格
