import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/view/register'
import Login from '@/components/view/login'
import ResetPsw from '@/components/view/resetPsw'
import My from '@/components/view/my'
import GetMoney from '@/components/view/getMoney'
import ReturnMoney from '@/components/view/returnMoney'
import MyBank from '@/components/view/myBank'
import WriteBank from '@/components/view/writeBank'
import LoanList from '@/components/view/loanList'
import Coupon from '@/components/view/coupon'
import DownLoad from '@/components/view/download'
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
    },
    {
      path: '/returnMoney',
      name: 'ReturnMoney',
      component: ReturnMoney
    },
    {
      path: '/myBank',
      name: 'MyBank',
      component: MyBank
    },
    {
      path: '/writeBank',
      name: 'WriteBank',
      component: WriteBank
    },
    {
      path: '/loanList',
      name: 'LoanList',
      component: LoanList
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/download',
      name: 'DownLoad',
      component: DownLoad
    },
  ]
})
