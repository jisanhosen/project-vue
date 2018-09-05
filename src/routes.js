import Vue from 'vue'
import Vuerouter from 'vue-router'
import Home from './componant/Home/Main-page.vue'
import About from './componant/About/About.vue'
import Gallery from './componant/Gallery/Gallery.vue'
import Icon from './componant/Icon/Icon.vue'
import Codes from './componant/codes/Codes.vue'
import Mail from './componant/Mail/Mail'

Vue.use(Vuerouter)

const router = new Vuerouter({
  routes : [
    {
      path    : '/',
      component: Home
    },
    {
      path    : '/about-us.html',
      component: About
    },
    {
      path    : '/gallery.html',
      component: Gallery
    },
    {
      path    : '/icon.html',
      component: Icon
    },
    {
      path    : '/codes.html',
      component: Codes
    },
    {
      path    : '/mail.html',
      component: Mail
    }
  ]
})

export default  router
