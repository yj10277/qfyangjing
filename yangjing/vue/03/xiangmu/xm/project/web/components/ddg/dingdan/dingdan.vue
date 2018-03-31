<template>
    <div class='dddhz'>
        <div class="dingdan">
            <router-link to="buycar"><span class='iconfont icon-fanhui'></span></router-link>
            <div>订单付款</div>
            <span></span>
        </div>
        <div class="box">
            <div class='psfs'>
                <span class='glyphicon glyphicon-bed'></span><span>配送方式：</span><span></span>
            </div>
            <div class="shdz">
                
                <div  class="addr" v-if="location"> 
                    <router-link to="direction"><span>{{location[idx].rename+'-------'+location[idx].phone}}</span>
                    <p>{{location[idx].direction}}</p></router-link>
                </div>
            <div v-else><span class='glyphicon glyphicon-plus'></span><router-link to="direction">  添加收货地址</router-link></div>
            </div>
            <div class="pssj">
                <span>配送时间</span><span>一小时送达  可预订 <b> ></b></span>
            </div>
            <div class="zffs">
                <span>付款方式</span><span>微信支付 <b> ></b></span>
            </div>
            <div class="hbyh">
                <span>红包优惠</span><span>无可用 <b> ></b></span>
            </div>
            <div class="dw">
                <span>下元岗店</span><span>联系商家</span>
            </div>
            <ul class="spll">
                <li v-for="(obj,idx) in products">
                    <div><img :src="'/project/web/components/ddg/img//'+obj.img" alt="" /></div>
                    <div>
                        <p>{{obj.name}}</p>
                        <p>￥{{obj.price}}</p>
                    </div>
                    <div>
                        <span>X {{obj.qty}}</span>
                    </div>
                </li>
            </ul>
            <div class="psf">
                <span>配送费</span><span>￥0.00</span>
            </div>
            <div class="yhje">
                <span>优惠金额</span><span>￥0.00</span>
            </div>
            <div class="ddbz">
                <span>订单备注</span><span>其他要求 <b> ></b></span>
            </div>
        </div>
        <div class="fk" v-if="location">
            <span> <b> 实付: </b>￥ {{total}}</span><span @click="payment">确认付款</span>
        </div>
        <div class="fk" v-else>
            <span> <b> 实付: </b>￥ {{total}}</span><span @click="fanhui">确认付款</span>
        </div>
        <div class="error" v-show="noadd">
            <div>
            <i class="del" @click ="dela">X</i>
            <h1>SORRY</h1>
            <p>请输入地址</p>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './dingdan.css'
    import http from '../../../utils/httpask.js'
    export default {
        data(){
            return{
                total:JSON.parse(sessionStorage.getItem("orderData")).total,
                products:JSON.parse(sessionStorage.getItem("orderData")).goodslist,
                name:localStorage.getItem("username"),
                location:JSON.parse(sessionStorage.getItem("address")),
                idx:sessionStorage.getItem("idx"),
                noadd:false
            }
        },
        methods:{

            payment(){
                http.post('addOrder',{total:this.total,pros:JSON.stringify(this.products),name:this.name,location:JSON.stringify(this.location)}).then((res)=>{
                    var time = res.data.ops[0].time;
                    sessionStorage.setItem("time", time);
                    this.$router.push('pay')
                })
                
            },
            fanhui(){
                this.noadd=true
            },
            dela(){
                this.noadd=false
            }
        },
       
    }
</script>