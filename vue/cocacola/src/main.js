import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

//滑动插件
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

//初始化样式
import "./assets/css/reset.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
