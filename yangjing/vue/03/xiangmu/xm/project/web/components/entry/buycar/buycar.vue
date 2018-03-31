<template>
    <div class="container">
        <header>
            <span @click="turn" class="iconfont icon-fanhui"></span>
            <span>购物车</span>
            <span></span>
        </header>
        <nav>
            <span>下元岗店</span>
            <span>满￥30.00免配送费</span>
        </nav>
        <main>
            <ul>
                <li v-for="(obj,idx) in dataset.goodslist">
                    <div><img :src="'/project/web/components/ddg/img//'+obj.img" alt="" /></div>
                    <div>
                        <p>{{obj.name}}</p>
                        <p>￥{{obj.price}}</p>
                    </div>
                    <div>
                        <input type="button" value="-" @click="minus" :data-idx="idx"/>
                        <span>{{obj.qty}}</span>
                        <input type="button" value="+" @click="add" :data-idx="idx"/>
                    </div>
                </li>
            </ul>
        </main>
        <footer v-if="dataset.goodslist.length>0">
            <span>合计￥<span>{{dataset.total}}</span></span>
            <span @click="submit">提交订单</span>
        </footer>
         <footer v-else>
            <span>合计￥<span>{{dataset.total}}</span></span>
            <span @click="submit2">提交订单</span>
        </footer>
        <div class="buyerror" v-show="buyc">
            <div>
            <i class="del" @click = 'buyc2'>X</i>
            <h1>你的购物车没有东西哦~</h1>
            <router-link to='list'><button>去逛逛</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import './buycar.css'
    import './base.css'


    export default {
        
            data(){
                return{
                    dataset:this.get(),
                    buyc:false
                    }
            },

            methods:{
                get(){
                    var goodslist = [];
                    var total = 0
                    // 获取cookie
                    var cookies = document.cookie;
                    cookies = cookies.split('; ');
                    cookies.forEach(function(item){
                        var arr = item.split('=');
                        if(arr[0] === 'carlist'){
                            goodslist = JSON.parse(arr[1]);
                        }
                    });
                    for(var i=0;i<goodslist.length;i++){
                         total=total+goodslist[i].price*goodslist[i].qty;
                     }
                         total=total.toFixed(2) * 1
                    return {
                         goodslist,
                         total
                        }
                   
                },
                submit(){   
                    var str=JSON.stringify(this.dataset)
                    sessionStorage.setItem("orderData", str);
                    this.$router.push('dingdan')
                },
                submit2(){
                    this.buyc = true
                },
                buyc2(){
                    this.buyc = false
                },
                turn(){
                    this.$router.push('list')
                },
                add(e){
                    var idx=e.target.getAttribute('data-idx');
                    this.dataset.goodslist[idx].qty+=1;
                    this.dataset.total+=this.dataset.goodslist[idx].price*1;
                    document.cookie = 'carlist=' + JSON.stringify(this.dataset.goodslist);
                },
                minus(e){
                    var idx=e.target.getAttribute('data-idx');
                    if(this.dataset.goodslist[idx].qty<=1){
                        this.dataset.total-=this.dataset.goodslist[idx].price*1;
                        this.dataset.goodslist.splice(idx,1)
                    }else{
                        this.dataset.total-=this.dataset.goodslist[idx].price*1;
                        this.dataset.goodslist[idx].qty-=1;
                    }
                    document.cookie = 'carlist=' + JSON.stringify(this.dataset.goodslist);
                }
                
            },

    }

</script>

