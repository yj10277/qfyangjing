<template>
    <div class='sydhz'>
        <div class="soushuo">
            <router-link to='/'><span class='glyphicon glyphicon-chevron-left'>首页</span></router-link>
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
            <li v-for="(obj, idx) in dataset" :data-id="obj._id">
                <img :src="'/project/web/components/ddg/img//'+obj.url" alt="" />
                <p>{{obj.title}}</p>
                <p>￥{{obj.price}} <i class="iconfont icon-jiahao01" @click="addgood"></i></p>
            </li>
            
        </ul>
        <router-link to="/buycar"><i class="iconfont icon-gouwuche"></i></router-link>        

        <!-- <spinner v-if="show"></spinner>  -->
    </div>
</template>
<script type="text/javascript">
    import http from '../../../utils/httpask.js'
    import './soushuo.css'
    import common from '../../entry/common.js'
    import $ from 'jquery'
    // import spinner from '../spinner/spinner.vue'
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
         //  components:{
         //    spinner
         // },
        methods:{
            oninput:function(){
                this.show=true;
                http.post('http://10.3.136.63:7070/check',{key:this.key}).then((res)=>{
                    if (res.data.arr.length>0) {
                        this.$refs.hot.style.display='none';
                        this.dataset=res.data.arr;
                        for(var i=0;i<res.data.arr.length;i++){
                            this.src.push('team7BMS/components/img/'+res.data.arr[i]['url'])
                        }
                        var cookies=document.cookie;
                        cookies=cookies.split('; ')
                        var searchKey=[];
                        cookies.forEach(function(item){
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
                        var arr=item.split('=');
                        if(arr[0]==='searchKey'){
                        searchKey=JSON.parse(arr[1]);
                        }
                    });
                    return searchKey;

            },
            searchPro:function(e){
                this.show=true;
                this.$refs.ss2.value=e.target.innerText;
                http.post('http://10.3.136.63:7070/check',{key:e.target.innerText}).then((res)=>{
                    if (res.data.arr.length>0) {
                        this.$refs.hot.style.display='none';
                        this.dataset=res.data.arr;
                        for(var i=0;i<res.data.arr.length;i++){
                            this.src.push('team7BMS/components/img/'+res.data.arr[i]['url'])
                        }
                    }
                    this.show=false;
                    
                })
            },
            addgood(event){
                    //加入购物车动画
                    var ball=document.createElement('div');
                    event.target.appendChild(ball);
                    ball.className='Ball';
                    var pos = $(event.target).offset();
                    $(ball).css({
                        position:'absolute',
                        left:pos.left + 10 + 'px',
                        top:pos.top + 100 + 'px'
                    });
                    common.common.animate(ball,{left:670,top:1080}, function(){ball.parentNode.removeChild(ball)})

                    //传入cookie
                    var cookies = document.cookie;
                    var carlist = [];

                    if(cookies.length){
                        cookies = cookies.split('; ');
                        cookies.forEach(function(item){
                            var arr = item.split('=');
                            if(arr[0] === 'carlist'){
                                carlist = JSON.parse(arr[1]);
                            }
                        });
                    };
                    
                    var curli=event.target.parentNode.parentNode;
                    var goodId=curli.getAttribute('data-id');

                    var curliData=[];

                    for(var obj of this.dataset){
                        for(var attr in obj){
                            if(obj[attr]==goodId){
                            curliData.push(obj);
                            
                            }
                        }
                       
                    }
                    //遍历，得到当前商品所有数据
                    var i=0;
                    for(;i<carlist.length;){
                       //判断cookie里是否有相同商品 ,存在，数量加1
                        
                       if(carlist[i].id === curliData[0]._id){
                               carlist[i].qty++;
                               break;
                       }else{i++;}
                    }
                    if(i==carlist.length){
                           //不存在：创建对象，并且数量为1
                           var goods = {
                               id:curliData[0]._id,
                               img:curliData[0].url,
                               name:curliData[0].title,
                               price:curliData[0].price,
                               qty:1,
                           }
                           carlist.push(goods);    
                       }

                        // 写入cookie
                        document.cookie = 'carlist=' + JSON.stringify(carlist);
                    
                            
            }

        }
    
    }
</script>