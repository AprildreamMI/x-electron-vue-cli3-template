# electron vue-cli3 模板项目

***重要重要：使用前通过cmd执行如下命令***

> // 配置electron镜像地址
> npm config set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
> // 打包时的各种文件的下载
> electron-builder-binaries_mirror=https://npm.taobao.org/mirrors/electron-builder-binaries/
> // 配置SASS镜像地址
> npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

## 使用element-ui

```javascript
  // 安装
  npm i element-ui -S

  // 配置按需引入 babel.config.js
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
      [
        'component',
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }
      ]
    ]
  }

  // 新建 src/plugins/element-ui.js
  import Vue from 'vue'
  import {
    Button,
    Loading,
    MessageBox,
    Message,
    Notification,
    Scrollbar
  } from 'element-ui'
  Vue.use(Button)
  Vue.use(Scrollbar)
  Vue.use(Loading.directive)
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message

  // 在 /src/main.js 按需引入element-ui
  import './plugins/element-ui'
```

## 使用`tailwind.config`
```javascript

  // 安装
  npm install tailwindcss

  // 生成配置项
  npx tailwindcss init --full

  // 配置配置项 tailwind.config.js
    // 1、 禁用重置样式插件
      corePlugins: {
        // 禁用重置样式插件 此插件有些不兼容el
        preflight: false
      }
    // 2、 加前缀
      prefix: 'tw-',


  // 配置插件 vue.config.js
  module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-import'),
            require('postcss-url'),
            require('autoprefixer'),
            require('tailwindcss')
          ]
        }
      }
    }
  }

  // 新建 src/style/tailwind.scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  // 在index.scss导入tailwind.scss
  @import './tailwind.scss';
```

## 使用electron

> https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/#installation

```javascript
  vue add electron-builder

  // 如果需要注入Node环境，在background.js中配置不生效，需要在vue.config.js中配置
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }

  // 使用
  Vue.prototype.$electron = require('electron')

```

### 静态资源使用

+ 例子：设置图标

  ```javascript
  'use strict'
  // '__static' is not defined
  /* global __static */
  
  import { app, protocol, BrowserWindow } from 'electron'
  ....
  function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
      width: 800,
      height: 600,
      // 引用的是public目录下的文件
      icon: path.join(__static, 'icon.png')
    })
  }
  ....
  ```

  

