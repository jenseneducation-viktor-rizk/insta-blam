import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragscroll from 'vue-dragscroll'

Vue.config.productionTip = false
Vue.prototype.Caman = window.Caman
Vue.use(VueDragscroll)
if('serviceWorker' in navigator){   
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  })
  .then( () => {
    console.log('Registered service worker')
  })
  .catch(error => console.log('Error with register service worker' + error));
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
