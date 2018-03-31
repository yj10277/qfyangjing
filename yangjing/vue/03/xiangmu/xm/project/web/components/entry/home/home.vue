<template>
    <div id="ddg">
        <router-view class="view"></router-view>
        
        <div class="footer_nav">
            <router-link class="nav-item iconfont icon-shouye" to="/shouye"><p>首页</p></router-link>
            <router-link class="nav-item iconfont icon-baozhuanhuan" to="/list"><p>逛店</p></router-link>
            <router-link class="nav-item iconfont icon-wode" to="/head"><p>我的</p></router-link>
        </div>
    </div>
</template>

<script>
    import './home.css'
    import '../../common/common.css'



    export default {

    }
</script>