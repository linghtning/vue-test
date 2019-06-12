import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePikaday from '@enrian/vue-pikaday';
Vue.use(VuePikaday);
import KnobControl from 'vue-knob-control'
Vue.use(KnobControl)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
