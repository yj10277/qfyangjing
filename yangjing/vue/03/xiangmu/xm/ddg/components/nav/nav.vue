<template>
    <div class='nav'>
        <div class='lbt'>
            <lbt></lbt> 
        </div>
        <div class="naver">
            <ul>
                <li><i class='i1'></i><span>抢优惠价</span></li>
                <li><i class='i2'></i><span>限时特价</span></li>
                <li><i class='i3'></i><span>本店热销</span></li>
                <li><i class='i4'></i><span>查看全部</span></li>
            </ul>
        </div>
        <div class='navdz'>
            <div class="dztj">
                <span>店长推荐</span><span>更多</span>
            </div>
            <ul class='dztjul' ref='ul1'>
                 <li v-for='(obj,index) in dataset1' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
                 
            </ul>
        </div>
        <div class='nav3'>
            <div class="dztj">
                <span>饮料酒水</span><span>更多</span>
            </div>
            <div class='nav3dt'></div>
            <ul class='nav3ul'>
                <li v-for='(obj,index) in dataset2' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav4'>
            <div class="dztj">
                <span>休闲零食</span><span>更多</span>
            </div>
            <div class='nav4dt'></div>
            <ul class='nav4ul'>
                <li v-for='(obj,index) in dataset3' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav5'>
            <div class="dztj">
                <span>方便速食</span><span>更多</span>
            </div>
            <div class='nav5dt'></div>
            <ul class='nav5ul'>
                <li v-for='(obj,index) in dataset4' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav6'>
            <div class="dztj">
                <span>牛奶面包</span><span>更多</span>
            </div>
            <div class='nav6dt'></div>
            <ul class='nav6ul'>
                <li v-for='(obj,index) in dataset5' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
            </ul>
        </div>
        <div class='nav7'>
            <div class="dztj">
                <span>个人护理</span><span>更多</span>
            </div>
            <div class='nav7dt'></div>
            <ul class='nav7ul'>
                <li v-for='(obj,index) in dataset6' :data-id="obj._id">
                     <img :src="'http://localhost:1717/ddg/components/img/'+obj.url" alt="" />
                     <h3>{{obj.title}}</h3>
                     <div><span>￥ {{obj.price}}</span><b class='glyphicon glyphicon-plus'></b></div>
                 </li>
            </ul>
        </div>
        <div class="nav8">
            <span class='glyphicon glyphicon-calendar'></span><span>客官点这里，带你去逛超市喔</span>
        </div>
        <i class='glyphicon glyphicon-shopping-cart'><span class='glyphiconspan'></span></i>
    </div>
</template>

<script>

    import http from 'axios'
    import './nav.css'
    import lbt from '../lbt/lbt.vue'
    export default {
        data(){
            return {
                dataset1:'',
                dataset2:'',
                dataset3:'',
                dataset4:'',
                dataset5:'',
                dataset6:'',
                
            }
        },
        components:{
            lbt:lbt
        },
        
        mounted(){
                var dj = document.querySelector('.nav');
                var gwc = document.querySelector('.glyphicon-shopping-cart');
                var gwcspan = document.querySelector('.glyphiconspan');
                var k = 0;gwcspan.innerText = k;

                http.post('http://10.3.136.63:7070/products').then((res)=>{
                    
                    var yuan = this.$refs.ul1;
                    let shuju = res.data.data;
                    this.dataset1 = shuju.slice(0,3);
                    this.dataset2 = shuju.slice(18,21);console.log(this.dataset2);
                    this.dataset3 = shuju.slice(18,21);
                    this.dataset4 = shuju.slice(25,28);
                    this.dataset5 = shuju.slice(12,15);
                    this.dataset6 = shuju.slice(33,36);
                })
                let arr3 = [];
                dj.onclick = (e)=>{

                    if(e.target.className == 'glyphicon glyphicon-plus'){
                            var ys = document.createElement('e');
                            e.target.appendChild(ys);
                            ys.innerText = '1';
                            ys.style.color = 'red';
                            ys.style.position = 'fixed';
                            var rig = e.pageX;
                            var to = e.pageY;
                            ys.style.left = rig + 'px';
                            ys.style.top = to + 'px';
                            
                            animate(ys,{left:680,top:1092},()=>{
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
                                               img:li.children[0].src.substr(-8),
                                               name:li.children[1].innerHTML,
                                               price:li.children[2].children[0].innerHTML.slice(2),
                                               qty:1 

                                              }
                                    arr3.push(obj);
                                }
                                console.log(arr3)
                                
                                
                                document.cookie = 'name=' + JSON.stringify(arr3);
                                
                                
                                
                            })     
                                
                    }
                }
                //刷新后cookie不被覆盖清空
                let a = document.cookie;
                let c = a.split('; ')
                    c.forEach(function(item){
                        let b = item.split('=');
                        if(b[0] == 'name'){
                            arr3 = JSON.parse(b[1]);
                        }
                    });  

              
                
                                
                              




               
        }
    }

</script>