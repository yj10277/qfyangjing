import React,{Component} from 'react'
import './updatamessage.css'

export default class UpdateComponent extends Component {
    state={
        name:window.sessionStorage.getItem('myname')
    }
    nextTo(){
        window.sessionStorage.removeItem('myname')
        this.props.router.push('login');
    }
    toAddress(){
        this.props.router.push('location')
    }
    preTo(){
        this.props.router.push('center')
    }
    render(){
        return(
            <div className="updatafather">
                <header className="updata-hd">
                    <span className="fa fa-chevron-left" aria-hidden="true" onClick={this.preTo.bind(this)}></span>
                    <span>账户设置</span>
                </header>
                <main className="updata-main">
                    <div className="main-div1">
                        <ul>
                            <li>
                                <span>头像</span>
                                <span><i className="head-img"></i><i className="fa fa-chevron-right" aria-hidden="true"></i> </span>
                            </li>
                            <li>
                                <span>账号</span>
                                <span>{this.state.name}<i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                            </li>
                            <li>
                                <span>性别</span>
                                <span>男<i className="fa fa-chevron-right" aria-hidden="true"></i> </span>
                            </li>
                        </ul>
                    </div>
                    <div className="main-div1 main-div2">
                        <ul>
                            <li onClick={this.toAddress.bind(this)}>
                                <span>收货地址</span>
                                <span><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                            </li>
                        </ul>
                    </div>
                    
                </main>
                <footer className="updata-foot">
                    <p onClick={this.nextTo.bind(this)}>退出当前账号</p>
                </footer>
            </div>
        )
    }
}