<template>
    <div class="yGood">
        <div id="yGood_header">
            <router-link to="/list"><i class="good_return">&lsaquo;</i></router-link> 
        商品详情</div>
        <div id="yGood_main">
            <div class="main_top">
                <img :src="curUrl" alt="" />
                <p>
                    <span>{{this.$route.params.curgoodData.title}}</span>
                    <span>￥ {{this.$route.params.curgoodData.price}}</span>
                </p>
            </div>
            <div class="main_bottom">
                <p>商品品牌：<span>{{this.$route.params.curgoodData.brand}}</span></p>
                <p>商品规格：<span>{{this.$route.params.curgoodData.standards}}</span></p>
                <p>商品商铺：<span>{{this.$route.params.curgoodData.shop}}</span></p>
            </div>
        </div>
        <div id="yGood_footer">
            <span class="good_share"><i class="iconfont icon-iconfontzhizuobiaozhun20"></i>分享</span>
            <span class="good_collect"><i class="iconfont icon-shoucang"></i>收藏</span>
            <span class="good_join" @click="joinInCar">加入购物车</span>
            
        </div>
        <span v-show="isShow" class="success_join">  &radic;  成功加入购物车</span>
    </div>
</template>

<script type="text/javascript">
    import './good.css'
    
    let curUrl;
    export default{
        data(){
            return{
                
                curUrl:'/project/web/components/ddg/img/'+this.$route.params.curgoodData.url,
                isShow:false,
                


            }
        },
        methods:{
            //成功加入购物车的提示
            joinInCar(){
                clearInterval(timer);
                this.isShow=true;
                let timer=setInterval(() => { 
                    this.isShow=false;
                }, 1500);

                //传入cookie--------------------------
                var cookies=document.cookie;
                var carlist=[];
                var currentData=this.$route.params.curgoodData;

                
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
                     
                    
                        var i=0;
                        for(;i<carlist.length;){
                        //判断cookie里是否有相同商品 ,存在，数量加1
                        
                            if(carlist[i].id === currentData._id){
                                carlist[i].qty++;
                                break;
                            }else{i++;}
                        }
                        if(i==carlist.length){
                        
                           //不存在：创建对象，并且数量为1
                           var goods = {
                               id:currentData._id,
                               img:currentData.url,
                               name:currentData.title,
                               price:currentData.price,                               
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
