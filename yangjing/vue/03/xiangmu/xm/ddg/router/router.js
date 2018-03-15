import Vue from 'vue'
import VueRouter from 'vue-router'


import NavComponent from '../components/nav/nav.vue'
import HeaderComponent from '../components/header/header.vue'
import ContainerComponent from '../components/container/container.vue'

import IndexComponent from '../components/index/index.vue'
import soushuo from '../components/soushuo/soushuo.vue'
import dingdan from '../components/dingdan/dingdan.vue'

Vue.use(VueRouter)


//轮播图
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
/* 使用px：import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider'; */
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);




const router = new VueRouter({
    routes:[
        
        {
            path:'/',
            component:IndexComponent,
            children:[
                {
                    path:'/index',
                    components:{
                        con:ContainerComponent,
                        nav:NavComponent,
                        header:HeaderComponent
                    }
                }
                
            ]
        },
        {
            path:'/soushuo',
            component:soushuo

        },
        {
            path:'/dingdan',
            component:dingdan
        }

        
        
        
        
    ]
})

export  default router;