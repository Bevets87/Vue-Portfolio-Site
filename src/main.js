import Vue from 'vue'
import VueRouter from 'vue-router'
import ScrollReveal from 'scrollreveal'

import App from './App.vue'
import Contact from './components/Contact.vue'
import Work from './components/Work.vue'
import About from './components/About.vue'
import Navbar from './components/Navbar.vue'

import 'bulma/css/bulma.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Vue-Portfolio-Site/',
    component: Work
  },
  {
    path: '/Vue-Portfolio-Site/about',
    component: About
  },
  {
    path: '/Vue-Portfolio-Site/contact',
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
