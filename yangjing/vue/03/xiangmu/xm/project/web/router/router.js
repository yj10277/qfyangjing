import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//轮播图
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
/* 使用px：import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider'; */
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

import mineComponent from '../components/mine/mine.vue'
import listComponent from '../components/entry/list/list.vue'
import setComponent from '../components/mine/Set/set.vue'
import loginComponent from '../components/mine/login/login.vue'
import mygoodsComponent from '../components/mine/mygoods/mygoods.vue'
import regComponent from '../components/mine/reg/reg.vue'
import exitComponent from '../components/mine/exit/exit.vue'
import allComponent from '../components/mine/mygoods/all/all.vue'
import getgoodsComponent from '../components/mine/mygoods/getgoods/getgoods.vue'
import nopayComponent from '../components/mine/mygoods/nopay/nopay.vue'
import indexComponent from '../components/ddg/index/index.vue'
import searchComponent from '../components/ddg/soushuo2/soushuo.vue'
import yGoodComponent from '../components/entry/yGood/good.vue'
import listDataComponent from '../components/entry/list/listData/listData.vue'
import buycarComponent from '../components/entry/buycar/buycar.vue'
import dingdanComponent from '../components/ddg/dingdan/dingdan.vue'
import payComponent from '../components/ddg/pay/pay.vue'
import addDirectionComponent from '../components/ddg/addDirection/addDirection.vue'
import DirectionComponent from '../components/ddg/direction/direction.vue'




Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/',component:indexComponent},
        {path:'/mine',component:mineComponent},
        {path:'/list',component:listComponent},
        {path:'/set',component:setComponent},
        {path:'/login',component:loginComponent},
        {
            path:'/mygoods',
            component:mygoodsComponent,
            children:[
                {path:'/all',component:allComponent},
                {path:'/nopay',component:nopayComponent},
                {path:'/getgoods',component:getgoodsComponent}

            ]
        },
        {path:'/reg',component:regComponent},
        {path:'/exit',component:exitComponent},
        {path:'/search',component:searchComponent},
        {path:'/yGood',name:'yGood',component:yGoodComponent},
        {path: '/listData', component: listDataComponent},
        {path: '/buycar', component: buycarComponent},
        {path: '/dingdan', component: dingdanComponent},
        {path: '/pay', component: payComponent},
        {path: '/addDirection', component: addDirectionComponent},
        {path:'/direction',component:DirectionComponent}





    ]
})
export default router;