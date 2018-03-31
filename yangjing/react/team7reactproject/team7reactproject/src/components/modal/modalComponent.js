import React,{Component} from 'react'


import './modal.css'

class ModalComponent extends Component{
    isShow(){
        this.props.method();
    }
   
    success(status){
      
        if(status){

        window.location.reload();
        }else{
           this.props.method(); 
        }
    }
 
    render(){
        let status;
        let close='';
        let title='注册状态'
        let content=null;
        if(this.props.config=='注册成功'){
           content= <p className="content">{this.props.config}</p>
           status=true;
         

        }else if(this.props.config=='您已注册'){
            content=<p  className="content">{this.props.config}</p>
            status=true;
          
        }else if(this.props.config=='注册失败'){
            content=<p  className="content">{this.props.config}</p>
            status=false;
         
        }else if(this.props.config=='确认付款'){
            content=<p  className="content" >{this.props.config+'    ?'}</p>
            title='支付状态';
            close=<button className="btn btnPrimary" onClick={this.success.bind(this,status)} >取消付款</button>
        }
        let html=(
             <div className="Marco-modal">
                <div className="Marco-modalBody">
                    <div className="Marco-modalHeader">
                        <h5 className="condition">{title}</h5>
                        <span className="Marco-modalClose" onClick={this.isShow.bind(this)}>&times;</span>
                    </div>
                    <div className="Marco-modalMain">
                       {content}
                    </div>
                    <div className="Marco-modalBtn">
                        
                        {close}
                        <button className="btn btnPrimary" onClick={this.success.bind(this,status)}>{this.props.news}</button>
                    </div>
                </div>
                <div className="Marco-modalShade"></div>
            </div>
            
        )
        return this.props.show ? html :null
    }
}
export default ModalComponent;