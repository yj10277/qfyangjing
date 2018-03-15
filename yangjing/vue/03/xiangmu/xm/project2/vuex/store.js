import Vue from 'vue'
import Vuex from 'vuex'
import header from '../components/home/header/header.js'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        header
    }
})
export default store;