import Vue from 'vue'
import appComponent from './components/app/app.vue'
import router1 from './router/router.js'


new Vue({
    el:'#app',
    router:router1,
    render:h=>h(appComponent),
})