import React from 'react'
import ReactDOM from 'react-dom'
// import {connect} from 'react-redux'
// 

import './shose.scss'
import Footer from '../footer/footer.js'
import http from '../../utils/HttpClient.js'

export default class ShoseComponent extends React.Component{
    state={
        dataset:[],
        brand:"Adidas"
    }
    changeSex(e){
        if(e.target.tagName=="SPAN"){
            var spans=e.target.parentNode.children;
            for(var i=0;i<spans.length;i++){
                spans[i].style.backgroundColor="#fff";
                spans[i].style.color="#000";
            }
            e.target.style.backgroundColor="#000";
            e.target.style.color="#fff";
        }
    }
    selecting(e){
        var tar=e.target.parentNode;
        var str=tar.getAttribute('data-brand')
        if(str){
            var lis=tar.parentNode.children;
            for(var i=0;i<lis.length;i++){
                lis[i].style.borderBottom="0";
            }
            tar.style.borderBottom="0.07rem solid #000";
            if(str!=this.state.brand){
                http.post('getPros',{brand:str}).then((res)=>{
                    this.setState({
                        dataset:res.data.result,
                        brand:str
                    })
                })
            }
        }
    }

    loading(e){
        e.target.setAttribute("src","src/images/loading.gif")
    }
    loaded(e){
        e.target.setAttribute("src",e.target.parentNode.getAttribute("data-img"))
    }



// =================================跳转详情======================================
    GotoDetail(e){
        var tar=e.target.parentNode.tagName=="LI"?e.target.parentNode:e.target;
        var id=tar.getAttribute("data-id");
        this.props.router.push({pathname:'/xq',state:{dataid:id}});
    }
// ============================================================================
    gotoSearch(){
        this.props.router.push({pathname:'/search'});

    }
    share(){
        
    }
    // =============================================

    componentWillMount(){
        http.post('getPros',{brand:"Adidas"}).then((res)=>{
                this.setState({
                    dataset:res.data.result
                })
            })
    }
    componentDidMount(id){
        function wetherScrollbrand(id){
            var startX = 0;
            var endX =0;
            var index;
            var body=document.getElementById(id);
            body.addEventListener('touchstart',function(event){
                var touch = event.targetTouches[0];
                startX = touch.pageX;
                index=body.offsetLeft
            });
            body.addEventListener("touchmove",function(event){
                var touch = event.targetTouches[0];
                endX = touch.pageX;
                var distanceX=endX - startX;
                body.style.left=index+distanceX+"px";
            });
            body.addEventListener("touchend",function(event){
                if(body.offsetLeft>0){
                    animate(body,{left:0})
                }else if(body.offsetLeft<=-300){
                    animate(body,{left:-325})
                }
            })
        }
        wetherScrollbrand("nav_ul")
    }

    render(){
        return(
            <div className="shoseContainer">
                <div className="searched" onClick={this.gotoSearch.bind(this)}><i className="fa fa-search"></i></div>
                <div className="share" onClick={this.share.bind(this)}><i className="fa fa-share-square-o" aria-hidden="true"></i></div>
                <div className="header" onClick={this.changeSex.bind(this)}><span>男鞋</span><span>女鞋</span></div>
                <div className="Shosenav">
                    <ul id="nav_ul" onClick={this.selecting.bind(this)}>
                        <li data-brand="Nike">
                            <img src="src/images/nav_nike.gif" alt=""/>
                        </li>
                        <li data-brand="Air Jordan">
                            <img src="src/images/nav_jorden.gif" alt=""/>
                        </li>
                        <li data-brand="Adidas">
                            <img src="src/images/nav_adidas(1).gif" alt=""/>
                        </li>
                        <li data-brand="Adidas">
                            <img src="src/images/nav_adidas.gif" alt=""/>
                        </li>
                        <li data-brand="Converse">
                            <img src="src/images/nav_converse.gif" alt=""/>
                        </li>
                        <li data-brand="Vans">
                            <img src="src/images/nav_vans.gif" alt=""/>
                        </li>
                        <li data-brand="New Balance">
                            <img src="src/images/nav_newbalance.gif" alt=""/>
                        </li>
                        <li data-brand="Supreme">
                            <img src="src/images/nav_puma.gif" alt=""/>
                        </li>
                        <li data-brand="Beat">
                            <img src="src/images/nav_reebok.gif" alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="shosemain">
                    <h3><span>热卖推荐</span></h3>
                    <ul>
                        {
                            this.state.dataset.map((item)=>{ 
                                return <li key={item.id} data-id={item.id} data-img={item.img} onClick={this.GotoDetail.bind(this)}>
                                            <img src="src/images/loading.gif" alt={item.introduce} onError={this.loading.bind(this)} onLoad={this.loaded.bind(this)}/>
                                            <h5>{item.name}</h5>
                                            <p>{"￥"+item.price+"+"}</p>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="footer">
                    <Footer config={"shose"} func={this.props.router}/>
                </div>
            </div>
        )
    }
}
