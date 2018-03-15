import vue from 'vue'
import './common/common.css'
import '../../../../../js/bootstrap-4.0.0/dist/css/bootstrap.css'
import HomeComponent from './components/home/home.vue'
import router from './router/router.js'
import store from './vuex/store.js'
new vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>h(HomeComponent)
})