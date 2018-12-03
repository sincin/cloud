import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/view/register'
import Login from '@/components/view/login'
import ResetPsw from '@/components/view/resetPsw'
import My from '@/components/view/my'
import GetMoney from '@/components/view/getMoney'

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
    },
    {
      path: '/resetPsw',
      name: 'ResetPsw',
      component: ResetPsw
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/getMoney',
      name: 'GetMoney',
      component: GetMoney
    }
  ]
})
