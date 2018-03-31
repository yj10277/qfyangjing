import React,{Component} from 'react'
import './createOrder.css'
import ModalComponent from '../modal/modalComponent.js'
import http from '../../utils/HttpClient.js'
export default class CreateOrderComponent extends Component{
    state={
        location:JSON.parse(window.sessionStorage.getItem('myplace')),
        show:false,
        content:'确认付款',
        news:'确认付款',
        data:''
    }
 
     getKeys(item){
        return item ? Object.keys(item) : [];
    }
 
    isShow(){
        this.setState({
            show:false
        })
    }
    showTime(){
        this.setState({
            show:true
        })
    }
    gotoAddress(){
        this.props.router.push('location')
    }
    componentWillMount(){
        var username=window.sessionStorage.getItem('myname');
        http.post('getUsers',{username}).then((res)=>{
            console.log()
            this.setState({
                data:JSON.parse(res.data.data[0].buylist)
            })
        })
    }
    render(){
        let html=<p></p>
        if(this.state.location.length>0&&this.state.data){
             html= (
                <div className="order-father">
                   <ModalComponent show={this.state.show} config={this.state.content} method={this.isShow.bind(this)} news={this.state.news}></ModalComponent>
                     <header className="updata-hd order-hd">
                        <span className="fa fa-chevron-left" aria-hidden="true" ></span>
                        <span>订单结算</span>
                    </header>
                    <div className="order-check">
                        <input type="checkbox"/>
                        <label htmlFor="selAll">全选</label>
                    </div>
                    <main className="order-main">
                       <div className="order-address">
                            {
                                this.state.location.map((item,idx)=>{
                                   return (<p key={idx} onClick={this.gotoAddress.bind(this)}>
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        {
                                            this.getKeys(item).map((key)=>{
                                               return <span key={key}>{item[key]}</span>
                                            })
                                        }
                                        <i className="fa fa-chevron-right nextTo" aria-hidden="true"></i>
                                    </p>)
                                })
                            }
                       </div>
                       <div className="order-list">
                            <ul>
                                {
                                    this.state.data.map((item,idx)=>{
                                        console.log(item)
                                        return(
                                            <li key={idx}>
                                                <h4>{item.shop}</h4>
                                                <div className="picture">
                                                <input type="checkbox"/>
                                                <img src={item['img']} />
                                                </div>
                                                <div className="brand">
                                                <p><span>{'品牌:'+item['brand']}</span></p>
                                                <p><span>{'商品名:'+item['name']}</span></p>
                                                <p><span>{'单价:'+item['price']+'￥'}</span></p>
                                                <p> <span>{'数量'+item['qty']}</span></p>
                                                
                                                
                                                
                                               
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                       </div>
                    </main>
                    <footer className="order-foot">
                        <div>
                            <p>总计：<span className="order-price"></span></p>
                            <button onClick={this.showTime.bind(this)} >立即付款</button>
                        </div>
                    </footer>
                </div>
            )
        }
        return html

    }
}