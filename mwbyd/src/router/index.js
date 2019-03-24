import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Shoplist from '@/views/Shoplist'
import Order from '@/views/Order'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shoplist,
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
