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

build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
fix：bug 修复
perf：性能优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型(日常事务)

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
## 工具链
### unpluin系列  自动导入模块、组件、图标，新增后需要重启，来更新新增内容
- unplugin-auto-import
```
//vue.config.js
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/, /\.vue\?vue/,
          /\.md$/
        ],
        imports: [
          'vue',
          'vue-router',
          'vuex'
        ],
        dts: false,
        eslintrc: {
          // 需要更新.eslintrc-auto-import.为true
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        dirs: [
					//自定义的导入，支持export导出，默认导出需export { default as dayjs } from 'dayjs'
          './src/utils'
        ],
      })
    ]

		//.eslintrc.js
		//解决eslint的未定义报错
		extends: ['./.eslintrc-auto-import.json']
```
- unplugin-vue-components
```
//vue.config.js  新建公共组件后，需要重启，不然无法识别到新加组件
plugins: [
      AutoComponents({
        // relative paths to the directory to search for components.
        dirs: [ 'src/components' ],
        // valid file extensions for components.
        extensions: [ 'vue' ],
        // search for subdirectories
        deep: true,
        // resolvers for custom components
        resolvers: [
          VantResolver()  //第三方UI库解析器，但函数组件需要手动添加，如Toast等，
        ],
        dts: false,  //for no typescript
      })
    ],

		//main.js
		import { Toast, Dialog, Notify } from 'vant'
		import 'vant/es/toast/style'  //需要添加样式
		Vue.use(Toast)
```

- unplugin-icons
```
//vue.config.js   插件加载图标，需要多试几次重启
plugins: [
      AutoComponents({
        resolvers: [
          IconsResolver({    //自动导入解析的图标
            defaultClass: 'icons',
            prefix: false,
            customCollections: [
              'my-icons'
            ],
          })
        ],
        dts: false,
      }),
      AutoIcons({
        compiler: 'vue2',
        customCollections: {
          'my-icons': FileSystemIconLoader(   //图标集名称，需要多单词，不然会解析卡住
            './src/assets/icons',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      })
    ],

		// 加载的图标的class为icon,文档的自定义设置后但不生效，再看看
		.App.vue
		.icon {
			width: 1em !important;
			height: 1em !important;
		}
```


## 问题
```
1.eslint添加校验json，package.json会报错
	添加了校验json,package.json会报错Parsing error: Unexpected token

```





