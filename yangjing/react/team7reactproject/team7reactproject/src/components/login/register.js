import React from 'react'
import ReactDOM from 'react-dom'
import http from '../../utils/HttpClient.js'
import ModalComponent from '../modal/modalComponent.js'
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
    state={
        code:this.getCode(),
        show:false,
        content:'',
        news:''
    }
    isShow(){
        this.setState({
            show:false
        })
    }
    changeShow(){

       this.props.change()
    }
    checkPhone(){
        var phone=this.refs.phone.value;
         if(!/^1[34578]\d{9}$/.test(phone)){
            $('.phone').text('手机号码格式错误')
            return 
        }else{
             $('.phone').text('手机号码格式正确').css({
                color:'#58bc58'
             })
        }

    }



    gotoHome(){
        console.log(this.props.func)
        this.props.func.router.push('/')
    }
    checkPassword(){
        var pwd=$('#password').val();
       
       if(!/^[a-z][a-z0-9]{5,19}$/.test(pwd)){
            $('.pwd').text('密码格式有误').css({
                color:'red',
                fontSize:'0.40625rem'
           
            })
            
        }else{
             $('.pwd').text('密码格式正确').css({
                color:'#58bc58',
                fontSize:'0.40625rem'
             
            })

        }
    }
    verifyPwd(){
        var pwd=$('#password').val();
        var repwd=$('#repassword').val();
       
        if(repwd!=pwd){
            $('#respan').text('两次密码输入不一致').css({
                color:'red',
                fontSize:'0.40625rem'
            })
        }else{
            $('#respan').text('两次密码输入一致').css({
                color:'#58bc58',
                fontSize:'0.40625rem',

            })
        }
    }
    checkCode(){
        var code =this.refs.span.innerText;
        var recode =$('#vcode').val();
        if(code!=recode){
            $('.errorcode').text('验证码错误').css({
                color:'red',
                fontSize:'0.40625rem'
            })
        }else{
            $('.errorcode').text('验证码正确').css({
                color:'#58bc58',
                fontSize:'0.40625rem'
            })
        }

    }
    adduser(){
        var phone=this.refs.phone.value;
        var pwd=$('#password').val();
        http.post('isreg',{username:phone}).then((res)=>{
            console.log(res)
            if(res.data.status&&res.data.result.length>0){
                    this.setState({
                        show:true,
                        content:'您已注册',
                        news:'去登陆',


                    })
            }else{
                http.post('addUser',{password:pwd,username:phone}).then((res)=>{
                    if(res.data.status){
                        this.setState({
                            show:true,
                            content:'注册成功',
                            news:'去登陆',
                        })
                    }else{
                         this.setState({
                            show:true,
                            content:'注册失败',
                            news:'试一次',
                        })
                    }
                   
                })
            }
        })


    }
    render(){
       var html=(
            <div>
                <ModalComponent show={this.state.show} config={this.state.content} method={this.isShow.bind(this)} news={this.state.news}></ModalComponent>
                <header className='register-hd'>
                    <span onClick={this.changeShow.bind(this)}>  &lt;</span>
                    <span className="time" onClick={this.gotoHome.bind(this)}>&times;</span>
                </header>
                <main className="login-main" id="register-main">
                    <p>注册</p>
                    <label htmlFor="username">手机号码:</label> <span className="phone"></span>
                    <input type="text" ref="phone" className="form-control form-control-lg" id="username" onBlur={this.checkPhone.bind(this)}/>
                    <label htmlFor="password">密码:</label><span className="pwd "></span>
                    <input type="password" className="form-control form-control-lg" id="password" onBlur={this.checkPassword.bind(this)}/>

                    <label htmlFor="repassword">确认密码:</label><span id="respan" ></span>
                    <input type="password" className="form-control form-control-lg" id="repassword" onBlur={this.verifyPwd.bind(this)}/>

                    <label htmlFor="vcode">验证码:</label> <span  ref="span" className="btn btn-light" onClick={this.reflesh.bind(this)}>{this.state.code}</span><span className="errorcode "></span>
                    <input type="text" className="form-control form-control-lg" id="vcode" onBlur={this.checkCode.bind(this)}/>
                  
                    <button className="btn btn-light " id="register" onClick={this.adduser.bind(this)}>注册</button>
                </main>

            </div>
        ) 
      return this.props.show ? html :null
    }
}