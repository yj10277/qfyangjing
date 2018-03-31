import React ,{Component} from 'react'

 // import { browserHistory } from 'react-router'  //引入路由函数
import './myCenter.css'
import FootComponent from '../footer/footer.js'
export default class MycenterComponent extends Component{
    state={
        name:window.sessionStorage.getItem('myname')
    }
    componentDidMount(){
        var body=$('.my-main')[0];
       body.addEventListener('scroll', function(){

            if(body.scrollTop>=10){
                $('.my-head').stop().animate({
                    top:0
                });
            }else if(body.scrollTop<=10){
                $('.my-head').stop().animate({
                    top:'-1.226667rem'
                });
            }
       })
    }
    nextTo(){

        this.props.router.push('/updatemessage')
 
    }
    render(){
        return (
            <div className="my-center">
                <span className="my-span" onClick={this.nextTo.bind(this)}><i className="fa fa-cog " aria-hidden="true"></i></span>
                <header className="my-head">
                    <span><i></i> {this.state.name}</span>
                </header>
                <main className="my-main">
                    <div className="my-back">
                        <span><i></i> {this.state.name}</span>
                    </div>
                    <ul className="my-list">
                        <li>
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                            我的订单
                        </li>
                        <li>
                            <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            我的购物车
                        </li>
                        <li>
                           <i className="fa fa-heart" aria-hidden="true"></i> 
                            我的收藏
                        </li>
                        <li>
                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                             蜂蜜商城
                        </li>
                        <li>
                            <i className="fa fa-ticket" aria-hidden="true"></i>
                            我的卡券
                           
                        </li>
                        <li>
                           <i className="fa fa-phone" aria-hidden="true"></i>                            联系客服
                            
                        </li>
                        <li>
                            <i className="fa fa-folder-open-o" aria-hidden="true"></i>
                            关于我们

                        </li>
                        <li>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            反馈问题
                        </li>
                    </ul>
                    <div className="my-foot">
                        <h2>---热销商品---</h2>
                    </div>
                </main>
                <footer className="myfooter">
                    <FootComponent config={'my'} func={this.props.router}/>
                </footer>
            </div>
        )
    }
}