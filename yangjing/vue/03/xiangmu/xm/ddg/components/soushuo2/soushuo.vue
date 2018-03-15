<template>
    <div class='sydhz'>
        <div class="soushuo">
            <router-link to='/index'><span class='glyphicon glyphicon-chevron-left'>首页</span></router-link>
            <div><input type="button" class='in1'/><input type="text" class='in2' v-model="key" ref="ss2" /></div>
            <span @click="oninput">搜索</span>
        </div>
        <div ref="hot">
            <div class="lmss">
                <span class='glyphicon glyphicon-fire'></span><span class='lmsss'>热门搜索</span>
            </div>
            <ul class="lieb">
                <li @click="searchPro">乐事</li>
                <li @click="searchPro">康师傅</li>
                <li @click="searchPro">牛奶</li>
                <li @click="searchPro">燕塘</li>
                <li @click="searchPro">汽水</li>
                <li @click="searchPro">薄荷糖</li>
            </ul>
            <div class="hisSearch">
                
                <div class="shanc">
                    <span class='glyphicon glyphicon-time'></span><span class='lmsss'>历史搜索</span><span class='glyphicon glyphicon-trash'></span>
                </div>
                <ul class="hs">
                    <li v-for="(obj,idx) in hisS " @click="searchPro">{{obj.word}}</li>
                </ul>
            </div>
        </div>
        <ul class="searchPro">
            <li v-for="(obj, idx) in dataset"><img :src="src[idx]" /><p><span>{{obj.title}}</span><br/><span>￥{{obj.price}}</span></p></li>
            
        </ul>
        <spinner v-if="show"></spinner> 
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpask.js'
    import './soushuo.css'
    import spinner from '../spinner/spinner.vue'
    export default {
        data:function(){
            return {
                dataset:[],
                key:'',
                src:[],
                hisS:this.historyS(),
                show:false
            }
        },
          components:{
            spinner
         },
        methods:{
            oninput:function(){
                this.show=true;
                http.post('http://10.3.136.63:7070/check',{key:this.key}).then((res)=>{
                    if (res.data.arr.length>0) {
                        console.log(res)
                        this.$refs.hot.style.display='none';
                        this.dataset=res.data.arr;
                        for(var i=0;i<res.data.arr.length;i++){
                            this.src.push('team7BMS/components/img/'+res.data.arr[i]['url'])
                        }
                        var cookies=document.cookie;
                        cookies=cookies.split('; ')
                        var searchKey=[];
                        cookies.forEach(function(item){
                            console.log(item)
                            var arr=item.split('=');
                            if(arr[0]==='searchKey'){
                            searchKey=JSON.parse(arr[1]);
                            }
                        });
                        var a=0;
                        for(var i=0;i<searchKey.length;i++){
                            if(searchKey[i].word==this.key){
                                a++;
                               
                            }
                        }
                        if(a==0){
                             var keywd={
                                    word:this.key
                                }
                                searchKey.push(keywd);
                        }
                        document.cookie="searchKey="+JSON.stringify(searchKey);

                      this.show=false;
                    };
                })
            },
            historyS:function(){
                var cookies=document.cookie;
               
                    cookies=cookies.split('; ')
                    var searchKey=[];
                    cookies.forEach(function(item){
                        console.log(item)
                        var arr=item.split('=');
                        if(arr[0]==='searchKey'){
                        searchKey=JSON.parse(arr[1]);
                        }
                    });
                    console.log(searchKey)
                    return searchKey;

            },
            searchPro:function(e){
                this.show=true;
                console.log(e.target.innerText,this.$refs.ss2)
                this.$refs.ss2.value=e.target.innerText;
                http.post('http://10.3.136.63:7070/check',{key:e.target.innerText}).then((res)=>{
                    if (res.data.arr.length>0) {
                        console.log(res)
                        this.$refs.hot.style.display='none';
                        this.dataset=res.data.arr;
                        for(var i=0;i<res.data.arr.length;i++){
                            this.src.push('team7BMS/components/img/'+res.data.arr[i]['url'])
                        }
                    }
                    this.show=false;
                    
                })
                    
                


            }
        }
    
    }
</script>