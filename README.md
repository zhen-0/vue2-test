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

## editorconfig
### 配置文件
```
.editorconfig
```

### vscode插件
```
EditorConfig for Visual Studio Code
```

## eslint格式化
### 配置文件
```
.eslintrc.js
```

### vscode插件
```
eslint
```

### vue/npm
```
eslint-plugin-vue
vue-eslint-parser
```
### react/npm
```
eslint-plugin-react
eslint-plugin-jsx-a11y
eslint-plugin-react-hooks
```
### ts/npm
```
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
```

## commit规范
### commit/npm
```
husky  //注册git 钩子
lint-staged  //对暂存区的文件执行命令
commitlint   //规范提交信息
@commitlint/config-angular    //提交信息argular规则集,可用其他
standard-version  //版本记录

参考链接[Git Commit 规范与配置](https://juejin.cn/post/7091276495972204580#heading-9)

提交时，必须用英文冒号并且冒号后加空格
```
## css规范
```
stylelint
stylelint-config-standard   //stylelint规则集
stylelint-config-recess-order  //stylelint属性排序规则集
postcss-html  //解析html.类html(.vue)文件
postcss-scss  //解析scss文件
postcss-less  //解析less文件
```

## 问题
```
1.eslint添加校验json，package.json会报错
	添加了校验json,package.json会报错Parsing error: Unexpected token

```





