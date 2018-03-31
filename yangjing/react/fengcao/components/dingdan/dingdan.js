import React,{Component} from 'react'
import {Link} from 'react-router'
import './dingdan.scss'
// import Dfk from './dddfk/dddfk.js'
import Qb from './ddqb/ddqb.js'
// import Yfk from './dddfk/dddfk.js'
export default class Dingdan extends Component{
    componentDidMount(){
      
        $('.nav li').eq(0).addClass('ys')
        $('.nav').on('click','li',function(){
              $(this).addClass('ys').siblings().removeClass('ys');
              

        })
     
    }
    gw(){
      this.props.router.push('gw')
    }
    render(){
        return <div className="dingdan">
                    <div className="head">
                        <i className='iconfont icon-fanhui' onClick={this.gw.bind(this)}></i><span>我的订单</span><i className='iconfont icon-fuwuerji'></i>
                    </div>
                    <ul className='nav'>
                           <li><Link to='/dd/ddqb'>全部</Link></li>
                           <li><Link to='/dd/dddfk'>待付款</Link></li>
                           <li><Link to='/dd/ddywc'>已完成</Link></li>
                    </ul>
                    <div>
                        {this.props.children || <Qb />}
                    </div>
               </div>
    }
}