import React from 'react'
import ReactDOM from 'react-dom'

import './footer.scss'

export default class FooterComponent extends React.Component{
    goto(e){
        var router=e.target.parentNode.getAttribute('data-router')?e.target.parentNode.getAttribute('data-router'):e.target.parentNode.parentNode.getAttribute('data-router');
        this.props.func.push(router)
    }
    componentDidMount(){
        this.refs[this.props.config].setAttribute('class','active')
    }
    render(){
        return(
            <div>
                <ul className="footerNav" onClick={this.goto.bind(this)}>
                    <li  data-router="/"><span ref="home"><i className="fa fa-home" ></i></span><span>首页</span></li>
                    <li data-router="/shose"><span ref="shose"><i className="fa fa-futbol-o" ></i></span><span>球鞋</span></li>
                    <li data-router="/gw"><span ref="cart"><i className="fa fa-shopping-cart" ></i></span><span>购物</span></li>
                    <li data-router="/center"><span ref="my"><i className="fa fa-user" ></i></span><span>我的</span></li>
                </ul>
            </div>
        )
    }
}