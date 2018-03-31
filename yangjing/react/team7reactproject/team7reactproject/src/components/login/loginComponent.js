import React from 'react'
import ReactDOM from 'react-dom'
import './login.css'
import './register.css'
import OnlyLoginComponent from  './onlyLogin.js'
import RegisterComponent from './register.js'
export default class LoginComponent extends React.Component{
    state={
        show1:true,
        show2:false,
    }
    changeShow2(){
        this.setState({
            show2:false,
            show1:true
        })
    }
    changeShow1(){
        this.setState({
            show2:true,
            show1:false
        })
    }
    nextTo(){
          this.props.router.push('/center')
    }
    render(){
        return (
            <div className="back">
                <OnlyLoginComponent show={this.state.show1} ref="login" change={this.changeShow1.bind(this)} nextTo={this.nextTo.bind(this)}></OnlyLoginComponent>
                <RegisterComponent show={this.state.show2} change={this.changeShow2.bind(this)} func={this.props}></RegisterComponent>

            </div>
        ) 
    }
}