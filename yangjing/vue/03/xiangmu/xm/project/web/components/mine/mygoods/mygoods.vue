<template>
    <div>
        <div class="order">
        <router-link to="/mine"><i class="iconfont icon-fanhui"></i></router-link>
        我的订单
        <router-link to="search"><i class="iconfont icon-fangdajing"></i></router-link>
        </div>
        <div class="obody">
            <ul>
                <router-link to='/all'><li class='choose'>全部订单</li></router-link>
                <router-link to='/getgoods' ><li class='choose'>待收货</li></router-link>
                <router-link to='/nopay' ><li class='choose'>待付款</li></router-link>
                <li>我的收藏</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    import './mygoods.css'

    import http from '../../../utils/httpask.js'
    export default{
        data:function(){
            return{
                user:localStorage.getItem("username"),
            }
        },
       
    }

    
    

</script>