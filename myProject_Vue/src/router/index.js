import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/Welcome'
import HomePage from '@/components/Home'
import Test from '@/components/Test'
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
      name: 'Test',
      component: Test
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
