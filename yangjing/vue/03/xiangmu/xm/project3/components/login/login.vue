<template>
        <div>
                <input type='text' v-model='username'/>
                <input type='password' v-model='pwd'/>
                <input type='button' value='登录' @click='login'/>

        </div>

</template>

<script>
        import http from '../../utils/httpclient'
        export default{
                data(){
                       return {username:'',pwd:''} 
                },
                methods:{
                        login(){
                                http.post('login').then((res)=>{
                                        console.log(res)
                                })
                        }
                }
        }
</script>
