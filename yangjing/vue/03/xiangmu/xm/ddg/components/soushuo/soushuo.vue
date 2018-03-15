<template>
    <div class='sydhz'>
        <div class="soushuo">
            <router-link to='/index'><span class='glyphicon glyphicon-chevron-left'></span></router-link>
            <div><input type="button" class='in1'/><input type="text" class='in2' ref="ss2"/></div>
            <span>搜索</span>
        </div>
        <div class="lmss">
            <span class='glyphicon glyphicon-fire'></span><span class='lmsss'>热门搜索</span>
        </div>
        <ul class="lieb">
            

        </ul>
        <div class="shanc">
            <span class='glyphicon glyphicon-time'></span><span class='lmsss'>历史搜索</span><span class='glyphicon glyphicon-trash'></span>
        </div>

    </div>
</template>

<script type="text/javascript">
    import http from 'axios'
    import './soushuo.css'
    
    export default {
        mounted:function(){
            var arr = [];
            var data = ''
            http.post('http://10.3.136.63:7070/products').then(function(res){
                    
                    data = res.data.data;
                    data.forEach(function(item){
                        arr.push(item.title);
                        console.log(arr);
                    })
            })
            
            var sl = this.$refs.ss2;
            sl.oninput = function(){
                let slz = sl.value;
            }
        }
    }
</script>

