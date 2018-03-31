import React from 'react'
import ReactDOM from 'react-dom'
import http from '../../utils/HttpClient.js'
export default class LoginComponent extends React.Component{
    getCode(){
        var str='0123456789'.split('');
        var arr='abcdefghijklmnopqrstuvwxyz'.split('');
        var yzm='';
        for(var i=0;i<2;i++){
            var idx=parseInt(Math.random()*str.length);
            yzm+=str[idx]+arr[idx];
        }
        return yzm;
    }

    reflesh(){
        this.setState({
            code:this.getCode()
        })
        this.refs.span.style.color="yellow";

    }
      changeShow(){
   
       this.props.change()
    }
    state={
        code:this.getCode(),
        content:''
    }
    checkPhone(){
        var phone=this.refs.phone.value;
         if(!/^1[34578]\d{9}$/.test(phone)){
            $('.phone').text('手机号码格式错误').css({
                color:'red',
                fontSize:'0.46875rem',
                marginLeft:'10px'
            });
            return 
        }else{
             $('.phone').text('手机号码格式正确').css({
                color:'#58bc58',
                fontSize:'0.46875rem',
                marginLeft:'10px'
            });
        }

    }
    checkUser(){
        var phone=this.refs.phone.value;
        var code =this.refs.span.innerText;
        var incode =this.refs.scode.value;
        var pwd =$('#password').val();
        if(code!=incode){
             $('.errorcode').text('验证码错误').css({
                color:'red',
                fontSize:'0.46875rem',
                marginLeft:'10px'
            });
            return
        }
        http.post('checkLogin',{username:phone,password:pwd}).then((res)=>{
               
            if(res.data.status&&res.data.result.length>0){
                sessionStorage.setItem('myname', phone);
                this.props.nextTo();

            }else{
                this.setState({
                    content:'您未注册哦！'
                })
            }
        })

    }
    render(){
       var html=(
            <div>
                <header className='login-hd'>
                    <span>&times;</span>
                </header>
                <main className="login-main">
                    <p id="errormeg">{this.state.content}</p>
                    <p>登录</p>
                    <label htmlFor="username">手机号码:</label><span className="phone"></span>
                    <input type="text" className="form-control form-control-lg" id="username" ref="phone" onBlur={this.checkPhone.bind(this)}/>
                    <label htmlFor="password">密码:</label> 
                    <input type="password" className="form-control form-control-lg" id="password"/>
                    <label htmlFor="vcode">验证码:</label> <span  ref="span" className="btn btn-light" onClick={this.reflesh.bind(this)}>{this.state.code}</span><span className="errorcode"></span>
                    <input type="text" className="form-control form-control-lg" id="vcode" ref="scode"/>
                    <button className="btn btn-warning" onClick={this.checkUser.bind(this)}>登录</button>
                    <button className="btn btn-light" onClick={this.changeShow.bind(this)} >注册</button>
                </main>
            </div>
        ) 
      return this.props.show ? html :null
    }
}