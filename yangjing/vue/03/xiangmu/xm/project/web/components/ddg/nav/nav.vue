<template>
    <div class='nav'>
        <div class='lbt'>
            <lbt></lbt> 
        </div>
        <div class="naver">
            <ul>
                <li><router-link to="/list"><i class='i1'></i><span>抢优惠价</span></router-link></li>
                <li><router-link to="/list"><i class='i2'></i><span>限时特价</span></router-link></li>
                <li><router-link to="/list"><i class='i3'></i><span>本店热销</span></router-link></li>
                <li><router-link to="/list"><i class='i4'></i><span>查看全部</span></router-link></li>
            </ul>
        </div>
        <div class='navdz'>
            <div class="dztj">
                <span>店长推荐</span><span @click='clickgd'>更多</span>
            </div>
            <ul class='dztjul' ref='ul1'>
                 <li v-for='(obj,index) in dataset1' :data-id="obj._id" >
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt=""  @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
                 
            </ul>
        </div>
        <div class='nav3'>
            <div class="dztj">
                <span>饮料酒水</span><span @click='clickgd'>更多</span>
            </div>
            <div class='nav3dt'></div>
            <ul class='nav3ul'>
                <li v-for='(obj,index) in dataset2' :data-id="obj._id">
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt="" @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav4'>
            <div class="dztj">
                <span>休闲零食</span><span @click='clickgd'>更多</span>
            </div>
            <div class='nav4dt'></div>
            <ul class='nav4ul'>
                <li v-for='(obj,index) in dataset3' :data-id="obj._id">
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt="" @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav5'>
            <div class="dztj">
                <span>方便速食</span><span @click='clickgd'>更多</span>
            </div>
            <div class='nav5dt'></div>
            <ul class='nav5ul'>
                <li v-for='(obj,index) in dataset4' :data-id="obj._id">
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt="" @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav6'>
            <div class="dztj">
                <span>牛奶面包</span><span @click='clickgd'>更多</span>
            </div>
            <div class='nav6dt'></div>
            <ul class='nav6ul'>
                <li v-for='(obj,index) in dataset5' :data-id="obj._id" >
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt="" @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav7'>
            <div class="dztj">
                <span>个人护理</span><span @click='clickgd'>更多</span>
            </div>
            <div class='nav7dt'></div>
            <ul class='nav7ul'>
                <li v-for='(obj,index) in dataset6' :data-id="obj._id" >
                     <img :src="'/project/web/components/ddg/img/'+obj.url" alt="" @click='click(obj)'/>
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='iconfont icon-jiahao01'></b></div>
                 </li>
            </ul>
        </div>
        <div class="nav8">
            <router-link to="list"><span class='glyphicon glyphicon-calendar'></span><span>客官点这里，带你去逛超市喔</span></router-link>
        </div>
        <i class="iconfont icon-gouwuche" v-if="!user"><router-link to="/login"><span class="glyphiconspan"></span></router-link></i> 
        <i class="iconfont icon-gouwuche" v-else><router-link to="/buycar"><span class="glyphiconspan"></span></router-link></i>  
        <!-- <loading v-if='show'></loading> -->     
    </div>
</template>

<script>

    import http from 'axios'
    import './nav.css'
    import lbt from '../lbt/lbt.vue'
    import common from '../../entry/common.js'
    // import laoing from '../loading/loading.vue'
    import $ from 'jquery'
    export default {
        data(){
            return {
                dataset1:'',
                dataset2:'',
                dataset3:'',
                dataset4:'',
                dataset5:'',
                dataset6:'',
                user:localStorage.getItem("username"),
                show:false
            }
        },
        components:{
            lbt:lbt,
            // loading:laoing
        },
        methods:{
            click:function(a){
                this.$router.push({name:'yGood',params:{curgoodData:a}})
                
            },
            clickgd:function(){
                this.$router.push({path:'/list'})
                
            }
        },
        
        mounted(){
                var dj = document.querySelector('.nav');
                var gwc = document.querySelector('.icon-gouwuche');
                var gwcspan = document.querySelector('.glyphiconspan');
                var k = 0;gwcspan.innerText = k;
                this.show = true;
                http.post('http://10.3.136.63:7070/products').then((res)=>{
                    
                    var yuan = this.$refs.ul1;
                    var arr1 =[];
                    var arr2 =[];
                    var arr3 =[];
                    var arr4 =[];
                    var arr5 =[];
                    var arr6 =[];
                    let shuju = res.data.data;
                    for(let b=0;b<shuju.length;b++){
                        if(shuju[b]['type']=='糖果'){
                            arr1.push(shuju[b]);
                        }else if(shuju[b]['type']=='牛奶'){
                            arr2.push(shuju[b]);
                        }else if(shuju[b]['type']=='香烟'){
                            arr3.push(shuju[b]);
                        }else if(shuju[b]['type']=='洗发露'){
                            arr4.push(shuju[b]);
                        }else if(shuju[b]['type']=='口腔'){
                            arr5.push(shuju[b]);
                        }else if(shuju[b]['type']=='酸奶'){
                            arr6.push(shuju[b]);
                        }
                    }
                    console.log(shuju);
                    this.dataset1 = arr1.slice(0,3);
                    this.dataset2 = arr2.slice(0,3);
                    this.dataset3 = arr3.slice(0,3);
                    this.dataset4 = arr4.slice(0,3);
                    this.dataset5 = arr6.slice(0,3);
                    this.dataset6 = arr5.slice(0,3);
                    this.show = false;
                })
                let arr3 = [];
                dj.onclick = (e)=>{

                    if(e.target.className == 'iconfont icon-jiahao01'){
                            e.stopPropagation();
                            var ys = document.createElement('e');
                            e.target.appendChild(ys);
                            // ys.innerText = '1';
                            ys.className='ys';
                            // ys.style.color = 'red';
                            ys.style.position = 'fixed';
                            var rig = e.pageX;
                            var to = e.pageY;
                            ys.style.left = rig + 'px';
                            ys.style.top = to + 'px';
                            var carpos=$('.icon-gouwuche').offset();
                            var leftx=carpos.left+25;
                            var topy=carpos.top+15;
                            common.common.animate(ys,{left:leftx,top:topy},()=>{
                                k++;
                                ys.parentNode.removeChild(ys);
                                gwcspan.innerText = k;

                                //写入cookie
                                
                                
                                
                               
                                e = e || window.event;
                                let target = e.target||e.srcElement;
                                
                                let li = target.parentNode.parentNode;
                                //防止cookie加相同的商品，同件商品后面数量叠加就可以了
                                for(var i=0;i<arr3.length;i++){
                                        if(arr3[i].id == li.dataset.id){
                                                arr3[i].qty++;
                                                break;
                                        }
                                }  
                                if(i == arr3.length){

                                    let obj = {
                                               id:li.dataset.id,
                                               img:li.children[0].src.slice(-8),
                                               name:li.children[1].innerHTML,
                                               price:li.children[2].children[0].innerHTML.slice(2),
                                               qty:1 

                                              }
                                    arr3.push(obj);
                                }
                                
                                
                                
                                document.cookie = 'carlist=' + JSON.stringify(arr3);
                                
                                
                                
                            })     
                                
                    }
                }
                //刷新后cookie不被覆盖清空
                let a = document.cookie;
                let c = a.split('; ')
                    c.forEach(function(item){
                        let b = item.split('=');
                        if(b[0] == 'carlist'){
                            arr3 = JSON.parse(b[1]);
                        }
                    });  

        }
    }
              
</script>
                
                                
                              




               
