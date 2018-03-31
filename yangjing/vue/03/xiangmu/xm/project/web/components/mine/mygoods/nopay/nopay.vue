<template>
    <div  class="nogoods">
        <ul>
            <li v-for="(obj,index) in pros" :data-id="obj.time">
                <p class="nogoods_mes"><span>{{obj.time}}</span>&nbsp;&nbsp;&nbsp;<span v-if="obj.state=='true'">已付款</span><span v-else  class="not_pay">未付款</span></p>
                <img :src="'/project/web/components/ddg/img/'+obj1.img" alt="" v-for="(obj1,index1) in JSON.parse(obj.pros)"/>
               
                <p class="nogoods_mes2">{{"共"+JSON.parse(obj.pros)[0].qty+"件商品   实付￥"+obj.total}}<button @click="paying">付款</button></p>
            </li>   
        </ul>
 
    </div>
</template>

<script type="text/javascript">
    import http from '../../../../utils/httpask.js'
    import './nopay.css'
        export default{
            data:function(){
                return{
                    pros:[],
                    user:window.localStorage.getItem('username')
                    
                }
            },
            mounted:function(){
                http.post('getOrder',{name:this.user,state:"false"}).then((res)=>{
                        this.pros = res.data
                 })       
            },

            methods:{
            paying:function(e){
                var time = e.target.parentNode.parentNode.getAttribute('data-id')
                
                sessionStorage.setItem('time',time);
                this.$router.push('pay');
            }
        }
        }
</script>