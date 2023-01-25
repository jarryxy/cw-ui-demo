import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import cwUI from '@/uni_modules/cw-ui'
Vue.use(cwUI)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif