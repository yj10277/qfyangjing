import Vue from 'vue'
import router from './router/router.js'
import homeComponent from './components/home.vue'
import VueLazyComponent from '@xunlei/vue-lazy-component'
Vue.use(VueLazyComponent)

new Vue({
    el:'#app',
    router,
    render: h => h(homeComponent)
})
