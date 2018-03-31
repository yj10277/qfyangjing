<template>
    <div>
        <div class='head'>
            <div class="pic" v-if="!user"><router-link to="/login"></router-link></div>
            <div class="pic1" v-else><router-link to="/exit"></router-link></div>
            <router-link to="/set" class="zset"><div class="set iconfont icon-shezhi"></div></router-link>
        </div>
        <p class="zlogin" v-if="!user"><router-link to="/login">登陆/注册</router-link></p>
        <p class="zlogin" v-else><router-link to="/exit">{{user}}</router-link></p>
    </div>
</template>

<script>
    import './header.css'
    export default{
        data:function(){
            return{
                user:localStorage.getItem("username")
            }
        },
       mounted:function(){
           var user= localStorage.getItem("username") ;
        },
    }
    
</script>