<template>
    <div class="getgoods">
        <ul>
            <li v-for="(obj,index) in pros">
                <p class="getgoods_mes">
                    <span>{{obj.time}}</span>&nbsp;&nbsp;&nbsp;
                    <span v-if="obj.state=='true'" class="already_pay">已付款</span>
                    <span v-else>未付款</span>
                </p>
                <img :src="'/project/web/components/ddg/img/'+obj1.img" alt="" v-for="(obj1,index1) in JSON.parse(obj.pros)"/>
                
                <p class="getgoods_mes2">

                {{"共"+JSON.parse(obj.pros)[0].qty+"件商品 实付￥"+obj.total}}
                </p>
            </li>   
        </ul>
    </div>
</template>

<script type="text/javascript">
    import http from '../../../../utils/httpask.js'
    import './getgoods.css'
    export default{
        data:function(){
            return{
                pros:[],
                user:window.localStorage.getItem('username')
            }
        },
        mounted:function(){
            http.post('getOrder',{name:this.user,state:"true"}).then((res)=>{
                    this.pros = res.data

             })       
        }
    }
</script>