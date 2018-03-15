import Vue from 'vue'
import VueRouter from 'vue-router'


import NavComponent from '../components/nav/nav.vue'
import HeaderComponent from '../components/header/header.vue'
import ContainerComponent from '../components/container/container.vue'
import LoginComponent from '../components/login/login.vue'
import IndexComponent from '../components/index/index.vue'
Vue.use(VueRouter)

// const router = new VueRouter({
//     routes:[
//         {path:'/foo',component:{template:'<h1>foo</h1>'}},
//         {path:'/bar',component:{template:'<h1>bar</h1>'}}
//     ]
// })


const router = new VueRouter({
    routes:[
        {path:'/login',component:LoginComponent},
        {
            path:'/',
            component:IndexComponent,
            children:[
                {
                    path:'index',
                    components:{
                        default:ContainerComponent,
                        nav:NavComponent,
                        header:HeaderComponent
                    }
                }
            ]
        }
        
        
        
        
    ]
})

export  default router;