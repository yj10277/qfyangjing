<template>
    <div class="dizhi">
        
        <header>
            <router-link to="dingdan"><span class="iconfont icon-fanhui"> </span></router-link>
            <span>我的地址</span>
            <span @click="addDirection"> 添加</span>
        </header>
        <main>
            <ul>
                <li v-for="(obj,key) in dataset"> 
                    <span>{{obj.rename+'-------'+obj.phone}}</span>
                    <p>{{obj.direction}}</p>
                    <div>
                        <input type="radio" @click = "choosead(key)" /> 选中
                        <span class="del" @click="delDirection(key)"><i class="iconfont icon-shanchu"></i>   删除</span>
                    </div>
                    
                </li>
            </ul>
        </main>
    </div>
</template>
<script type="text/javascript">
import http from '../../../utils/httpask.js'
import './Direction.css'
import router from '../../../router/router.js'
    export default {
        data:function(){
            return {
                name:localStorage.getItem("username"),
                dataset:'',
                id:'',

                
              
            }
        },
        methods:{
            delDirection(key){
                this.dataset.splice(key,1);
                http.post('updateDirection',{direction:JSON.stringify(this.dataset),id:this.id}).then((res)=>{
                    sessionStorage.removeItem('address')
                    http.post('checkDirection',{name:this.name}).then((res)=>{
                        this.dataset=res.data.data[0].location;
                        window.sessionStorage.setItem('userLocation',JSON.stringify(this.dataset));
                })

              })
            },
            addDirection(){
                router.push("/addDirection");
                window.sessionStorage.setItem('usersId',this.id);

            },
            choosead(key){
                sessionStorage.setItem('address',JSON.stringify(this.dataset))
                this.$router.push('dingdan')
                sessionStorage.setItem('idx',key)
            }
        },
        mounted:function(){
            http.post('checkDirection',{name:this.name}).then((res)=>{
                this.dataset=res.data.data[0].location;
                window.sessionStorage.setItem('userLocation',JSON.stringify(this.dataset));

                
                this.id=res.data.data[0]['_id'];
            })
        }
    }
</script>