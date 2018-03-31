<template>
    <div class="exit">
        <div class="ehead">
            <router-link to="/mine"><i class="iconfont icon-fanhui"></i></router-link>
            <p>我的帐号</p>
        </div>
        <div class="ebody">
            <ul>
                <li>
                    <i>头像</i><i></i>
                </li>
                <li>
                    <i>昵称</i><i>{{user}}</i>
                </li>
            </ul>

        </div>

        <router-link to="/mine"><button id="btn_exit" @click="tuichu">退出帐号</button></router-link>
    </div>
</template>

<script type="text/javascript">
    import './exit.css'
    export default{
        data:function(){
            return{
                user:localStorage.getItem("username")
            }
        },
        methods:{
            tuichu(){
                localStorage.removeItem('username');
                sessionStorage.clear();
                document.cookie = 'carlist='+JSON.stringify([]); 
            }
        }
    }
</script>