import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/Welcome'
import HomePage from '@/components/Home'
import FlexPage from '@/components/FlexPage'
import RoutePage from '@/components/RoutePage'
import Message from '@/components/Message'

Vue.use(Router)

// let routes = [

// ]
export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/test',
      name: 'RoutePage',
      component: RoutePage
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/flex',
      name: 'FlexPage',
      component: FlexPage
    }
  ]
})
