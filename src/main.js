import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入element-ui
import './plugins/element-ui'

Vue.config.productionTip = false

// electron 插件
Vue.prototype.$electron = require('electron')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
