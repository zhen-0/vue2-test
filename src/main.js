import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast, Dialog, Notify } from 'vant'
import 'vant/es/toast/style'
import 'uno.css'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false


// 将 Toast 等组件注册到 app 上
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Notify)
console.log(123)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
