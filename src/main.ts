import Vue from 'vue'
import App from './components/ChildRouterView.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import'./assets/app.scss'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
