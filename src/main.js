import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
// rem
import 'amfe-flexible'
//css
import './styles/base.less'

//title
import VueWechatTitle from 'vue-wechat-title'

// ui
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = process.env.NODE_ENV === 'development'

Vue.use(Vant)
Vue.use(VueWechatTitle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
