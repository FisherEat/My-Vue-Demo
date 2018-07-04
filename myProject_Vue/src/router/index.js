import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Message from '@/components/Message'

// import { resolve } from 'url'

// const Test = resolve => require(['../components/Test.vue'], resolve)
// const HelloWorld = resolve => require(['../components/HelloWorld.vue'], resolve)

Vue.use(Router)

// let routes = [

// ]
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
