//webpack starts from this file to see what needs to be packaged

import Vue from 'vue' // default export
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
