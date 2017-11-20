import Vue from 'vue'
import VueRouter from 'vue-router'
import ScrollReveal from 'scrollreveal'

import App from './App.vue'
import Contact from './components/Contact.vue'
import Work from './components/Work.vue'
import About from './components/About.vue'

import 'bulma/css/bulma.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Work
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  created() {
    window.sr = ScrollReveal()
  },
  router,
  render: h => h(App)
})
