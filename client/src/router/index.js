import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Galleries from '@/components/Galleries'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Galleries
        }
      ]
    }
  ]
})
