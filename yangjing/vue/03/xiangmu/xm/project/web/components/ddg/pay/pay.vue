<template>
    <div class="successpay">
        <div>
            <h1>确认付款</h1>
            <button @click="sure">确认</button>
            <button @click="cancel">取消</button>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './pay.css'
    import http from '../../../utils/httpask.js'
    export default{
        
        methods:{
            sure(){
                http.post('updateOrder',{time:sessionStorage.getItem('time')}).then((res)=>{
                    this.$router.push('/');
                    document.cookie = 'carlist='+JSON.stringify([]);
                })
            },  
            cancel(){
                this.$router.push('/')
                document.cookie = 'carlist='+JSON.stringify([]);
            }
        }
    }
</script>