import React,{Component} from 'react'

import './shoppingcar.scss'
import http from '../../utils/HttpClient.js'

let _carlist;
var _ordernum;
let _total = 0;    
var _username; 
export default class Shoppingcar extends Component{
    fh(){
        this.props.router.push('gw');
    }
     
     pay(){
        this.props.router.push(pathname:'gw',ordernum:_ordernum);
     }

    submit(){
        var timestamp = (new Date()).valueOf();
            _ordernum=JSON.stringify(parseInt(Math.random()*10000+1)+timestamp);
        var carlist=[];
        var residueCargo=[]
        for(let i=1;i<$('input').length-1;i++){
            if($('input')[i].checked){
               carlist.push(_carlist[$('input')[i].getAttribute('data-idx')])
            }
            else{
                residueCargo.push(_carlist[$('input')[i].getAttribute('data-idx')])
            }
        }
        var a=JSON.stringify(carlist)
        var b=JSON.stringify(residueCargo.length==0?null:residueCargo)
        console.log(a,b)
        http.post('createOrder',{username:_username,carlist:a,total:_total,ordernum:_ordernum,residueCargo:b}).then((res)=>{
            console.log(res)
            this.props.router.push({pathname:'/',ordernum:_ordernum})
        })

    }


     selAll(){
      var input =  $('input')
      var total='0.00';
      console.log()
      if(input[0].checked){
        for(var i=0;i<input.length;i++){
            total*=1;
            total+=input[i].id*input[i].getAttribute('data')
            input[i].checked=true
        }
            $('.zj').text(total+'￥').css({
            color:'red',
            fontSize:'40px'
        })
      }else{
        for(var i=0;i<input.length;i++){
            input[i].checked=false
        }
        $('.zj').text(total+'￥').css({
            color:'red',
            fontSize:'40px'
        })

      }
    }
 
    

    componentDidMount(){
        _username=window.sessionStorage.getItem('myname')
        console.log(_username)
        http.post('getUsers',{username:_username}).then((a,b)=>{
                  let arr = JSON.parse(a.data.data[0].buylist)?JSON.parse(a.data.data[0].buylist):[]
                  _carlist=arr;
                  $('.shopcarnav')[0].innerHTML = arr.map((item,idx)=>{
                     return `<li>
                                <div>
                                   <input type="checkbox" name="" id="${item.qty}" data="${item.price}" style="display:inline" data-idx="${idx}"/>
                                </div>
                                <img src="${item.img}" alt=""/>
                                <span>
                                   <h1>${item.name}</h1>
                                   <h2>单价：${item.price}</h2>
                                   <h3>数量：${item.qty}</h3>
                                </span>
                                <div><button>X</button></div>
                            </li>`
                  }).join('')
                  $('.zj')[0].innerHTML= _total;
                    $('ul').on('click','input',function(){
                        var _total=0;
                        console.log(this)
                        for(let i=1;i<$('input').length;i++){
                            if($('input')[i].checked){
                                _total*=1;
                                _total+=$('input')[i].id*$('input')[i].getAttribute('data')
                                
                            }
                            $('.zj').text(_total+'￥').css({
                                color:'red',
                                fontSize:'40px'
                            })
                        }
                    })

            })
    }
    render(){
        return <div className='shoppingcar'>
                    <div className='head'><i className='iconfont icon-fanhui' onClick={this.fh.bind(this)}></i><span>购物车</span><i className='iconfont icon-fuwuerji'></i>
                    </div>
                    <div className="order-check">
                        <input type="checkbox" onClick={this.selAll.bind(this)}/>
                        <label htmlFor="selAll" >全选</label>
                    </div>

                    <ul className='shopcarnav'>
                    </ul>
                    <div className="bigbox">
                        <span className="zj"></span>
                         <input type="button" value="提交订单" onClick={this.submit.bind(this)}/>
                    </div>



                    

               </div>                          
    }
}




