import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/components'
import VueMqtt from 'vue-mqtt'

Vue.use(require('vue-moment'))  // import와 같음
Vue.use(VueMqtt, 'ws://192.168.35.129:9001/ws',
      {clientID: "clientId-" + parseInt(Math.random()*1000)})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
