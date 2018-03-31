import vue from 'vue'
import router from './router/router.js'
import index from './components/index/index.vue'



new vue({
    el:'#app',
    router:router,
    render:(h)=>h(index)
})