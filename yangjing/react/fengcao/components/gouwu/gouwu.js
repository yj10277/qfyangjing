import React,{Component} from 'react'
import './gouwu.scss'
import http from 'superagent'


import { Carousel } from 'antd';
import { Spin } from 'antd'

export default class Gouwu extends Component{
    componentDidMount(){
        document.querySelector('.show').style.display = 'block';
        http.post('http://10.3.136.34:9090/product').end((error,res)=>{
                  
                  let arr = res.body.data;
                  
                  let html = document.querySelector('.goodlist');
                    html.innerHTML = arr.map((item)=>{
                      return `<li data-id='${item.id}'>
                                  <img src="${item.img}" />
                                  <h1><span>￥：</span>${item.price}</h1>
                                  <h2>${item.name}</h2>
                                  <h3><span>品牌店：</span>&nbsp;&nbsp;&nbsp;&nbsp;${item.shop}</h3>
                              </li>`


                    }).join('');
                    document.querySelector('.show').style.display = 'none';
                    
                    let lis = html.querySelectorAll('li');
                    for(let i=0;i<lis.length;i++){
                         lis[i].onclick = ()=>{
                             
                             this.props.router.push({pathname:'xq',state:{dataid:lis[i].dataset.id}});
                         }
                    }


           })
    }
    gwc(){
        this.props.router.push('car')
    }
    render(){
            return <div className="gouwu">
                        <div className="head">
                             <input type="text" placeholder='Search'/>
                             <i className='iconfont icon-gouwuche-01' onClick={this.gwc.bind(this)}></i><i className='iconfont icon-sousuo'></i>
                        </div>
                        <div className="nav">
                              <div className="lbt">
                                  <Carousel autoplay>
                                      <div><img src="fengcao/img/lbt1.jpg"/></div>
                                      <div><img src="fengcao/img/lbt2.jpg"/></div>
                                      <div><img src="fengcao/img/lbt3.jpg"/></div>
                                      <div><img src="fengcao/img/lbt4.jpg"/></div>
                                    </Carousel>
                              </div>
                              <ul className="goodlist">

                              </ul>
                              
                        </div>    
                        <Spin className='show'/>     
                        <div className="foot"></div>
                        
                        
                   </div>
    }
}


