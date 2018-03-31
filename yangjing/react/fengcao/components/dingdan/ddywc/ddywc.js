import React,{Component} from 'react'
import './ddywc.scss'
import http from '../../../utils/HttpClient.js'
export default class Dingdanqb extends Component{
    componentDidMount(){
        let name = window.sessionStorage.getItem('myname');
        http.post('http://10.3.136.34:9090/searchOrder',{username:13432876075,status:0}).then((res)=>{
            let arr3 = res.data.result;
           
            console.log(arr3)
             
            $('.dingdanywc')[0].innerHTML = arr3.map((a)=>{
                return `<ul>${    
                    JSON.parse(a.buylist).map((b)=>{

                       return `<li data-id='${b.id}'>
                                  <img src='${b.img}'/>
                                   <h1>${b.name}</h1>
                                   <h2><span>价格：</span>${b.price}</h2>
                                   <h3><span>数量：</span>${b.qty}</h3>
                                   
                             </li>`
                    }).join('')
                } <div><h1>${a.total}</h1><h2>立即付款</h2></div></ul>`          
            }).join('')
            let zj = 0;
            arr3.map((a)=>{
                      
                      
                      zj += a.total*1;
                      return zj;
            }).join('');

            $('.fukuan h1 span')[0].innerHTML = zj;
        })
    }
    render(){
        return <div className='ywc'>
                  <div className="dingdanywc">
                    
                  </div>
                  <div className='fukuan'>
                       <h1>总计：<span></span></h1>
                       <h2>立即付款</h2>
                  </div>
               </div>
    }
}