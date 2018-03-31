import React,{Component} from 'react'
import './xiangqing.scss'
import http from 'superagent'
import httpw from '../../utils/HttpClient.js'




export default class Xiangqing extends Component{
    qh1(){
        this.refs.lb.style.display = 'block';
        this.refs.tp.style.display = 'none';
        this.refs.span1.style = 'border-bottom:2px solid black';
        this.refs.span2.style = 'border-bottom:none';
        
    }
    qh2(){
        this.refs.tp.style.display = 'block';
        this.refs.lb.style.display = 'none';
        this.refs.span2.style = 'border-bottom:2px solid black';
        this.refs.span1.style = 'border-bottom:none';
        
    }
    tz(){
        this.props.router.push('car')//或者location.href = '#/car'
       
    }
    componentDidMount(){
       
        var obj
        var dataid = this.props.location.state.dataid;
        http.post('http://10.3.136.34:9090/product').end((error,res)=>{
             let arr = res.body.data;
             
             arr.forEach((a)=>{
                 if(a.id == dataid){
                     obj = a;
                 }
             })
            
            document.querySelector('.head span').innerHTML = obj.shop;
            document.querySelector('.nav .lbt img').src = obj.img;
            document.querySelector('.nav .biaoti h3').innerHTML = '￥：' + obj.price;
            document.querySelector('.nav .biaoti p').innerHTML = obj.name;
           $('.jlgwc')[0].onclick = ()=>{
                console.log(window.sessionStorage.getItem('myname'));
                httpw.post('http://10.3.136.34:9090/gotocar',{username:window.sessionStorage.getItem('myname')?window.sessionStorage.getItem('myname'):'yangjing',id:obj.id})
           }
    
            
        })


    }
    
    
    render(){
        
        return <div className='xiangqing'>

                    <div className='head'>
                        <i className='iconfont icon-fanhui' onClick={goback}></i><span></span><i className='iconfont icon-gouwuche-01' onClick={this.tz.bind(this)}></i>
                    
                    </div>
                    
                    <div className="nav">
                         <div className="lbt">
                             <img src="" alt="" />


                         </div>
                         <div className="biaoti">
                                <h3></h3>
                                <p></p>
                                <h4>发货地：上海 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运费：至全国￥22.00元</h4>
                         </div>
                         <div className="lmtj">
                             <h3>热门推荐</h3>
                             <div className="hd">
                                 <ul>
                                     <li><img src='src/img/01.jpg' alt="" /></li>
                                     <li><img src="src/img/02.jpg" alt="" /></li>
                                     <li><img src="src/img/03.jpg" alt="" /></li>
                                     <li><img src="src/img/04.jpg" alt="" /></li>
                                     <li><img src="src/img/05.jpg" alt="" /></li>
                                     <li><img src="src/img/06.jpg" alt="" /></li>
                                 </ul>

                             </div>
                         </div>
                         <div className="spxq">
                                <span onClick={this.qh1.bind(this)} ref='span1' className="special">商品详情</span>
                                <span onClick={this.qh2.bind(this)} ref='span2' className="special">购物须知</span>
                         </div>
                         <img src="src/img/gwxz.png" alt="" className='gwxz' ref='tp'/>
                         <div className='tpxq' ref='lb'>
                                <img src="https://files.eyee.com/EYEE/Image/20171025/6364453948818586294943362.jpg!c30" alt="" />
                         </div>
                         
                    </div>
                    
                
                    
                    
                    <div className="foot">
                         <i className='iconfont icon-cloud'></i><i className='iconfont icon-fuwuerji'></i><i className='iconfont icon-xin'></i><span onClick={this.tz.bind(this)}>立即购买</span><span className='jlgwc'>加入购物车</span>
                    </div>
                    <span className='fd' ref='hd'></span> 
                    
                   

               </div>
    }
}


