import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'


const app = new Vue({
  render: h => h(App),
  router
})

app.$mount('#app')
