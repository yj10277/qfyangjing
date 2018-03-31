<template>
    <div class="login">
        <div class="lhead">
            <router-link to="/mine"><i class="iconfont icon-fanhui"></i></router-link>
            <p>快捷登录</p>
        </div>
        <div class="lbody">
            <ul>
                <li>
                    <i class="iconfont icon-shouji"><input type="text" placeholder="请输入帐号" id="username" v-model="lname"/></i>
                </li>
                <li>
                    <i class="iconfont icon-mima"><input type="password" placeholder="请输入密码" id="password" v-model="lpwd"/></i>
                </li>
            </ul>

        </div>
        <h6>温馨提示</h6>
        <p>点击注册会为您创建账户，且代表您已同意</p>
        <span>《店店购用户协议》</span>
        <button id="btn_login" @click="denglu">登录</button>
        <router-link to="/reg"><button id="btn_reg">注册</button></router-link>
        <div class="false" v-show="show">
            <div>
            <i class="del" @click="delate">X</i>
            <h1>SORRY</h1>
            <p>账户密码不相符</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './login.css'
    import http from '../../../utils/httpask.js'
    // setTimeout(function(){
    // window.location.reload(); 
    // },5000)
    let params = new URLSearchParams()
    export default{
        data(){
            return{
                show:false,
                lname:'',
                lpwd:''
            }
        },
        methods:{
            denglu(){
                let name = this.lname
                http.post('http://10.3.136.63:7070/userlogin',{name:this.lname,pwd:this.lpwd})
                      .then((response) =>{
                       
                        if(response.data.status){
                            localStorage.setItem("username", name);
                            this.$router.push('mine')                            
                        }else{
                            this.show = true
                        }
                      })
                      
           },
           delate(){
                this.show=false
           }

        }
            
    }

    
</script>