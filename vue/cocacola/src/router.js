import Vue from 'vue'
import Router from 'vue-router'

import Loadding from './views/Loadding.vue'//加载页
import Index from './views/Index.vue'//首页
import Form from './views/Form.vue'//抽奖信息填写页
import Rule from './views/Rule.vue'//规则阅读页
import Game from './views/Game.vue'//游戏页面
import Nowin from './views/Nowin.vue'//未中奖页
import Record from './views/Record.vue'//中奖纪录页
import Detail from './views/Detail.vue'//奖品详情页
import Nostart from './views/Nostart.vue'//活动未开始页
import Gameover from './views/Gameover.vue'//活动结束页
import Maintain from './views/Maintain.vue'//活动维护页

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //加载路由
    {
      path: '/',
      name: 'loadding',
      component: Loadding
    },
    //首页
    {
      path: '/index',
      name: 'index',
      component:Index
    },
    {
      path: '/form',
      name: 'form',
      component:Form,
    },
    {
      path: '/rule',
      name: 'rule',
      component:Rule,  
    },
    {
      path: '/game',
      name: 'game',
      component:Game,
    },
    {
      path: '/nowin',
      name: 'nowin',
      component:Nowin,  
    },
    {
      path: '/record',
      name: 'record',
      component:Record,  
    },
    {
      path: '/detail',
      name: 'detail',
      component:Detail,  
    },
    {
      path: '/nostart',
      name: 'nostart',
      component:Nostart,  
    },
    {
      path: '/gameover',
      name: 'gameover',
      component:Gameover,  
    },
    {
      path: '/maintain',
      name: 'maintain',
      component:Maintain,  
    },
  ]
})
