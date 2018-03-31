<template>
    <div class="list">
        <div id="list_header">

            <span class="iconfont icon-fangdajing"></span>
            <router-link to="/search"><input type="text" placeholder="搜索本店商品" /></router-link>
            
        </div>
        <div id="list_main">   
            <ul class="main_left">
                <li v-for="(value,idx) in familyList" @click="curTab(value,idx)" :class="{list_main_active:idx==listIdx}">{{value}}</li>
                
            </ul>
            <yylistData ref="child"></yylistData>
            <!-- <router-view></router-view> -->
        </div>
        <ul class="fmenu">
            <router-link to="/"><li class="iconfont icon-shouye"><p>首页</p></li></router-link>
            <router-link to="/list"><li class="iconfont icon-baozhuanhuan"><p>逛店</p></li></router-link>
            <router-link to="/mine"><li class="iconfont icon-wode"><p>我的</p></li></router-link>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import http from 'axios'
    import './list.css'
    import yylistData from './listData/listData.vue'

    export default{
        data(){
            return{
                dataset:[],
                familyList:['牛奶面包','随手携带','饮料酒水','休闲零食','冷藏冻品','方便速食','香烟代购','生活百货','粮油调味','个人护理'],
                listIdx:0,
                listValue:null  
            }
        },
        components:{
            yylistData
        },
        methods:{
            curTab:function(value,idx){
                this.listIdx=idx;
                this.listValue=value;
                this.$refs.child.upup(this.listIdx,this.listValue);

            }
        },
        mounted(){
            // http.post('http://10.3.136.63:7070/products').then((res)=>{
            //     // console.log(res);
            //     this.dataset=res.data.data;
            // })
        }
    }

</script>