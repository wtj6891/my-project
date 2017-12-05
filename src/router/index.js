import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
