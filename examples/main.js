import Vue from 'vue'
import App from './App.vue'
import HtUi from '../packages'
Vue.config.productionTip = false
Vue.use(HtUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
