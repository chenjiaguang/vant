import Vue from 'vue'
import App from './App'
import statusbarReplacer from './components/statusbar-replacer.vue'

Vue.config.productionTip = false
Vue.component('statusbar-replacer', statusbarReplacer)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
