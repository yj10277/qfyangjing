<template>
    <ul class="main_right" >
       
        <li v-for="(obj,index) in goodsList"  @click.stop="toGood(obj)" :id="obj._id">
            <vue-lazy-component>            
                <img :src="'/project/web/components/ddg/img//'+obj.url" alt="" />
            </vue-lazy-component>
            <div class="main_goodsdata">
                <p>{{obj.title}}</p>
                <p>￥{{obj.price}}</p>
            </div>
            <span class="iconfont icon-jiahao01 addAmount" @click.stop="add" ></span>           
        </li>
       
        <i class="iconfont icon-gouwuche" v-if="!user"><router-link to="/login"><span class="glyphiconspan"></span></router-link></i> 
        <i class="iconfont icon-gouwuche" v-else><router-link to="/buycar"><span class="glyphiconspan"></span></router-link></i>        
    </ul>   
</template>
<script>
    import './listData.css'
    import http from 'axios'
    import common from '../../common.js'
    import $ from 'jquery'
    
    export default {
       
        data(){
            return{
                goodsList:[],
                user:localStorage.getItem("username")
            }
        },      
        beforeMount(){
            http.post('http://10.3.136.63:7070/products').then((res)=>{
                for(let obj of res.data.data){
                    for(let attr in obj){
                        if(obj[attr]=='牛奶面包'){
                            this.goodsList.push(obj);
                        }
                        
                    }
                }
            })           
        },
        methods:{
            //点击，跳转到详情页，并传参
            toGood(curgoodData){
                // this.$router.push('/yGood');                
                this.$router.push({name:'yGood',params:{curgoodData:curgoodData}});
            },
            upup(idx,value){
                //请求数据，生成列表页商品结构
                http.post('http://10.3.136.63:7070/products').then((res)=>{
                    this.goodsList=[];
                    for(let obj of res.data.data){
                        for(let attr in obj){
                            if(obj[attr]==value){
                                this.goodsList.push(obj);
                            }
                            
                        }
                    }
                })
            },
            add(event){
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
                    var carpos=$('.icon-gouwuche').offset();
                    var leftx=carpos.left+25;
                    var topy=carpos.top+15;
                    common.common.animate(ball,{left:leftx,top:topy}, function(){ball.parentNode.removeChild(ball)})

                    // common.common.animate(ball,{left:670,top:1080}, function(){ball.parentNode.removeChild(ball)})

                    //传入cookie
                    var cookies = document.cookie;
                    var carlist = [];

                    if(cookies.length){
                        cookies = cookies.split('; ');
                        cookies.forEach(function(item){
                            var arr = item.split('=');
                            // console.log(arr);
                            if(arr[0] === 'carlist'){
                                carlist = JSON.parse(arr[1]);
                            }
                        });
                    };
                    
                    var curli=event.target.parentNode
                    var goodId=curli.id;

                    var curliData=[];

                    for(var obj of this.goodsList){
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
                        // console.log(carlist.length);  
                    
                            
            }
        }
        
    }
  
</script>

