import Vue from 'vue'
import Router from 'vue-router'
import Adv from './views/Adv.vue'
import Post from './views/Post.vue'
import Game from './views/Game.vue'
import Animal from './views/Animal.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/adv',
      name: 'adv',
      component: Adv
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/animal',
      name: 'animal',
      component: Animal
    }
  ]
})
