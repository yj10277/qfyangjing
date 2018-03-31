<template>
    <div>
       <div class="my" v-if="!user">我的订单
             <router-link to="/login"><i>查看全部订单 ></i></router-link>
        </div>
        <div class="my" v-else>我的订单
             <router-link to="/all"><i>查看全部订单 ></i></router-link>
        </div>
        <ul class="menu">
            <li v-if="!user">
            <router-link to="/login"><i class="iconfont icon-iconset0325"></i><p>全部订单</p></router-link>
            </li>
            <li v-else>
            <i class="iconfont icon-iconset0325" @click="alldd"></i><p>全部订单</p>
            </li>
             <li v-if="!user">
            <router-link to="/login"><i class="iconfont icon-daisonghuodingdan"></i><p>待收货</p></router-link>
            </li>
            <li v-else>
            <i class="iconfont icon-daisonghuodingdan" @click="noget"></i><p>待收货</p>
            </li>
             <li v-if="!user">
            <router-link to="/login"><i class="iconfont icon-shoucang"></i><p>待付款</p></router-link>
            </li>
            <li v-else>
            <i class="iconfont icon-shoucang" @click="nopayed"></i><p>待付款</p>
            </li>
             <li v-if="!user">
            <router-link to="/login"><i class="iconfont icon-101"></i><p>我的收藏</p></router-link>
            </li>
            <li v-else>
            <router-link to="/mygoods"><i class="iconfont icon-101"></i><p>我的收藏</p></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import './nav.css'
    import http from '../../../utils/httpask.js'
    export default{
        data:function(){
            return{
                user:localStorage.getItem("username"),
            }
        },
       mounted:function(){
           var user= localStorage.getItem("username") ;
        },
        methods:{
            alldd(){
               
                    this.$router.push('all')
    
            },
            noget(){
                
                    this.$router.push('getgoods')
    
            },
            nopayed(){
                
                    this.$router.push('nopay')
                
            }

        }
    }
</script>