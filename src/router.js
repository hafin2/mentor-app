import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Picture from './views/Picture.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/picture/:id',
      name: 'picture',
      component: Picture
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
