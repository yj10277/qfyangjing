import React,{Component} from 'react'

import './shoppingcar.scss'
import http from '../../utils/HttpClient.js'

let _carlist;
var _ordernum;
let _total = 0;        
export default class Shoppingcar extends Component{
    fh(){
        this.props.router.push('gw');
    }
     
     pay(){
        this.props.router.push(pathname:'gw',ordernum:_ordernum);
     }

    submit(){
        var timestamp = (new Date()).valueOf();
            console.log(timestamp)
                 _ordernum=JSON.stringify(parseInt(Math.random()*10000+1)+timestamp);



         http.post('getorder')

        // http.post('createOrder',{username:'13413618934',carlist:_carlist,total:_total,ordernum:_ordernum}).then((res)=>{
        //     console.log(res)
        // })
    }
    componentDidMount(){
        http.post('getUsers',{username:'13413618934'}).then((a,b)=>{
              
                  let arr = JSON.parse(a.data.data[0].buylist)
                  _carlist=JSON.stringify(arr);
                  $('.nav')[0].innerHTML = arr.map((item)=>{
                    _total += item.price*item.qty;
                     return `<li>
                                <div>
                                   <input type="checkbox" name="" id="" style="display:inline"/>
                                   
                                </div>
                                
                                <span>
                                   <h1>${item.name}</h1>
                                   <h2>单价：${item.price}</h2>
                                   <h3>数量：${item.qty}</h3>
                                </span>
                                
                            </li>`
                  }).join('')
                  $('.zj')[0].innerHTML= _total;
            })
    }
    render(){
        return <div className='shoppingcar'>
                    <div className='head'><i className='iconfont icon-fanhui' onClick={this.fh.bind(this)}></i><span>购物车</span><i className='iconfont icon-fuwuerji'></i>
                    </div>
                    <div></div>
                    <ul className='nav'>
                    </ul>
                    <div className="bigbox">
                        <span className="zj"></span>
                         <input type="button" value="提交订单" onClick={this.submit.bind(this)}/>
                    </div>



                    

               </div>                          
    }
}




