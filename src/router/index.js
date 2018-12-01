import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/view/register'
import Login from '@/components/view/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: '',
      component: Login
    }
  ]
})
