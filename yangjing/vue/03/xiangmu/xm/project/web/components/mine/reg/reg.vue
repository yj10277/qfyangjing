<template>
    <div class="reg">
        <div class="rhead">
            <router-link to="/login"><i class="iconfont icon-fanhui"></i></router-link>
            <p>快捷注册</p>
        </div>
        <div class="rbody">
            <ul>
                <li>
                    <i class="iconfont icon-shouji"><input type="text" placeholder="请输入帐号" id="rusername" v-model="name"/></i>
                </li>
                <li>
                    <i class="iconfont icon-mima"><input type="password" placeholder="请输入密码" id="rpassword" v-model="pwd"/></i>
                </li>
                 <li>
                    <i class="iconfont icon-mima"><input type="password" placeholder="请再次输入密码" id="tpassword" v-model="tpwd"/></i>
                </li>
                <li>
                    <i class="iconfont icon-shouji"><input type="text" placeholder="请输入手机号码" id="phone" v-model="tel"/></i>
                </li>
            </ul>

        </div>
        <h6>温馨提示</h6>
        <p>点击注册会为您创建账户，且代表您已同意</p>
        <span>《店店购用户协议》</span>
        <button id="rbtn_reg" @click ="zhuce">注册</button>
        <div class="error" v-show="ok">
            <div>
            <i class="del" @click = "hidden">X</i>
            <h1>SORRY</h1>
            <p>格式不正确</p>
            </div>
        </div>

    </div>
</template>

<script type="text/javascript">
    import './reg.css'
    import http from '../../../utils/httpask.js'


    
    export default{
        data(){
            return{
                ok:false,
                name:'',
                pwd:'',
                tpwd:'',
                tel:''
            }
        },
        methods:{
            zhuce(){
                // console.log(this.name,this.pwd)
                if(this.name == '' || this.pwd == '' || this.tpwd == '' || this.tel == ''){
                    this.ok = true
                }else{
                    
                    if(this.pwd != this.tpwd){
                        this.ok = true
                    }else{
                        http.post('http://10.3.136.63:7070/adduser',{name:this.name,pwd:this.pwd,tel:this.tel})
                          .then((response)=> {
                            if(response.data.status){
                                this.$router.push('/login')
                            }
                          })
                          .catch(function (error) {
                          });
                      }
                }
           },
           hidden(){
               this.ok = false
           }

        }
        
    }


     
</script>