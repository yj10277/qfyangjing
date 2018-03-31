import React,{Component} from 'react'
import './gouwu.scss'
import http from 'superagent'


import { Carousel } from 'antd';
import { Spin } from 'antd'
import Footer from '../footer/footer.js'

export default class Gouwu extends Component{
    componentDidMount(){
        document.querySelector('.gwshow').style.display = 'block';
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
                    console.log(document.querySelector('.gwshow'))
                    document.querySelector('.gwshow').style.display = 'none';
                    
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

    gotoSearch(){
        this.props.router.push('search')
    }

    render(){
            return <div className="gouwu">
                        <div className="head">
                             <input onFocus={this.gotoSearch.bind(this)}type="text" placeholder='Search'/>
                             <i className='iconfont icon-gouwuche-01' onClick={this.gwc.bind(this)}></i><i className='iconfont icon-sousuo'></i>
                        </div>
                        <div className="nav">
                              
                              <ul className="goodlist">

                              </ul>
                              
                        </div>    
                        <Spin className='gwshow'/>     
                        <div className="foot">
                            <Footer config={"cart"} func={this.props.router}/>
                        </div>
                   </div>
    }
}


