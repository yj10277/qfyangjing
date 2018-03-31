import React from 'react'
import ReactDOM from 'react-dom'
// import {connect} from 'react-redux'
// 

import './home.scss'
import '../../libs/common/common.js'
import Footer from '../footer/footer.js'
import Title from './component/HomeHeader.js'
import http from '../../utils/HttpClient.js'
import {Link} from 'react-router'
import { Spin } from 'antd'
let time;
let i=0;

export default class HomeComponent extends React.Component{
    state={
        dataset:[],
        dataset_pro:[],
    }
    getdataset(){
       http.post('popularity',{col:"popularity",minnum:"80",maxnum:"90"}).then((res)=>{
            this.setState({
                dataset:res.data.result,
            })
       })
    } 
    getdataset_pro(){
        http.post('popularity',{col:"number",minnum:"0",maxnum:"15"}).then((res)=>{
            this.setState({
                dataset_pro:res.data.result,
            })
        })
    }
  // ===================================跳转函数===================================
    
    gotoDetail(e){
        var tar=e.target.parentNode.tagName=="LI"?e.target.parentNode:e.target;
        var id=tar.getAttribute("data-id");
        this.props.router.push({pathname:'/xq',state:{dataid:id}});
    }


    GotoList(e){
        var tar=e.target.parentNode;
        if(tar.tagName=="LI"){
            var _brand=tar.getAttribute('data-brand');
            this.props.router.push({pathname:'/list',state:{brand:_brand}})
        }
    }
    gotoSearch(){
        this.props.router.push({pathname:'/search'});
    }


// ==================================拖拽事件========================================
    wetherScrollbrandSpecial(ulid,rang){
        var startX = 0;
        var endX =0;
        var index;
        var body=document.getElementById(ulid);
        var bodyWith;
        body.addEventListener('touchstart',function(event){
            startX=endX=0
            var touch = event.targetTouches[0];
            startX = touch.pageX;
            index=body.offsetLeft
        });
        body.addEventListener("touchmove",function(event){
            var touch = event.targetTouches[0];
            endX = touch.pageX;
            var distanceX=endX - startX;
            body.style.left=index+distanceX+"px";
            bodyWith=parseInt(body.style.width)*75
        });
        body.addEventListener("touchend",function(event){
            var distanceX=endX - startX;
            if(body.offsetLeft>rang){
                animate(body,{left:0})
            }else if(body.offsetLeft<-bodyWith+750+rang){
                animate(body,{left:-bodyWith+750})
            }
            startX=endX=0
        })
    }


    wetherScrollbrand(id,rang,num,way){
        var startX = 0;
        var endX =0;
        var index;
        var body=document.getElementById(id);
        var bodyWith=body.offsetWidth;
        body.addEventListener('touchstart',function(event){
            startX=endX=0
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
            var distanceX=endX - startX;
            if(way===true){
                if(distanceX>rang){
                    animate(body,{left:0})
                }else if(distanceX<-rang){
                    animate(body,{left:-bodyWith/num})
                }else{

                }
            }
            if(body.offsetLeft>-rang){
                animate(body,{left:0})
            }else if(body.offsetLeft<bodyWith/num-rang){
                animate(body,{left:-bodyWith/num})
            }
            startX=endX=0
        })
    }

    wetherScroll(a){
        var body=document.getElementById(a);
        body.addEventListener('touchstart',function(event){
            clearInterval(time)
        });
        body.addEventListener("touchend",function(event){
            var liWidth=body.children[0].children[0].offsetWidth;
            var liLength=body.children[0].children.length;
            var range=400;
            for(var i=0;i<liLength;i++){
                if(body.scrollLeft>i*liWidth-liWidth+range&&body.scrollLeft<=range+i*liWidth){
                    body.scrollLeft=i*liWidth;
                }
            }
            time=setInterval(()=>{auto_show(a)},2000)
        })
        function auto_show(a){
            var body=document.getElementById(a);
            var liWidth=body.children[0].children[0].offsetWidth;
            var liLength=body.children[0].children.length;
            body.scrollLeft=i*liWidth;
            i++;
            if(i>liLength-1){
                i=0;
            }
        }
    }




    componentWillMount(){
        this.getdataset()
        this.getdataset_pro()
    }
    

    componentDidMount(){
        function auto_show(id){
            var body=document.getElementById(id);
            var liWidth=body.children[0].children[0].offsetWidth;
            var liLength=body.children[0].children.length;
            body.scrollLeft=i*liWidth;
            i++;
            if(i>liLength-1){
                i=0;
            }
        }
        time=setInterval(()=>{auto_show("bannerul")},2000)
        this.wetherScroll("bannerul")
        this.wetherScrollbrand("brandsul",200,2,true)
        this.wetherScrollbrandSpecial("limitul",200)
        this.wetherScrollbrandSpecial("recommendationul",200)
    }
    componentDidUpdate(){
        var limitul=document.getElementById("limitul")
        limitul.style.width=this.state.dataset_pro.length*8+"rem"
        var recommendationul=document.getElementById("recommendationul")
        recommendationul.style.width=this.state.dataset_pro.length*3+"rem"
    }


    componentWillUnmount(){
        clearInterval(time)
    }


    render(){
        return(
            <div className="homecontainer">
                <Spin className='gwshow'/>     
                <div className='home'>
                    <i className="fa fa-search search"  onClick={this.gotoSearch.bind(this)}></i>      

                    <div className="banner"  id="bannerul">
                        <ul>
                            <li>
                            <a href="#"><img src="src/images/banner00.jpg" alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src="src/images/banner01.jpg" alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src="src/images/banner02.jpg" alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src="src/images/banner03.jpg" alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src="src/images/banner04.jpg" alt=""/></a>
                            </li>
                        </ul>
                    </div>    


                    <Title config={["热门品牌","HOT BREANDS",this.props]}/> 
                    <div className="picul" >
                        <ul id="brandsul" onClick={this.GotoList.bind(this)}>
                            <li data-brand="Nike">
                                <img src="src/images/brands_hey.jpg" alt=""/>
                            </li>
                            <li data-brand="Adidas">
                                <img src="src/images/brands_heart.jpg" alt=""/>
                            </li>
                            <li data-brand="Beat">
                                <img src="src/images/brands_beat.jpg" alt=""/>
                            </li>
                            <li data-brand="Champion">
                                <img src="src/images/brands_pion.jpg" alt=""/>
                            </li>
                            <li data-brand="Nike">
                                <img src="src/images/brands_nike.jpg" alt=""/>
                            </li>
                            <li data-brand="Adidas">
                                <img src="src/images/brands_adidas.jpg" alt=""/>
                            </li>
                            <li data-brand="Beat">
                                <img src="src/images/brands_white.jpg" alt=""/>
                            </li>
                            <li data-brand="Converse">
                                <img src="src/images/brands_converse.jpg" alt=""/>
                            </li>
                            <li data-brand="Beat">
                                <img src="src/images/brands_grey.jpg" alt=""/>
                            </li>
                            <li data-brand="Beat">
                                <img src="src/images/brands_killwinner.jpg" alt=""/>
                            </li>
                            <li data-brand="Converse">
                                <img src="src/images/brands_ssup.jpg" alt=""/>
                            </li>
                            <li data-brand="Vans">
                                <img src="src/images/brands_vans.jpg" alt=""/>
                            </li>
                            <li data-brand="Air Jordan">
                                <img src="src/images/brands_thr.jpg" alt=""/>
                            </li>
                            <li data-brand="Vans">
                                <img src="src/images/brands_puma.jpg" alt=""/>
                            </li>
                            <li data-brand="Supreme">
                                <img src="src/images/brands_calmmind.jpg" alt=""/>
                            </li>
                            <li data-brand="New Balance">
                                <img src="src/images/brands_gun.jpg" alt=""/>
                            </li>
                            <li data-brand="Air Jordan">
                                <img src="src/images/brands_shadow.jpg" alt=""/>
                            </li>
                            <li data-brand="Supreme">
                                <img src="src/images/brands_sup.jpg" alt=""/>
                            </li>
                        </ul>
                    </div>



                    <Title config={["限量发售","Limit Sale",this.props]}/>
                    <div className="limit" >
                        <ul id="limitul" onClick={this.gotoDetail.bind(this)}>
                            {
                                this.state.dataset_pro.map((item)=>{
                                   return <li key={item.id} data-id={item.id}>
                                        <img src={item.img} alt=""/>
                                        <p><span>结束时间</span><span><del>{"￥"+(item.price*1).toFixed(2)}</del></span></p>
                                        <h4><span>04月04日 04:44</span><span>{"￥"+(item.price*0.8).toFixed(2)}</span></h4>
                                    </li>
                                })
                            }
                        </ul>
                    </div>


                    <Title config={["人气推荐","Recommendation",this.props]}/>
                    <div className="recommendation">
                        <ul id="recommendationul" onClick={this.gotoDetail.bind(this)}>
                            {
                                this.state.dataset.map((item)=>{
                                    return(
                                        <li key={Math.random()} data-id={item.id} data-img={item.img} >
                                                <img src="src/images/loading.gif" alt={item.introduce} onError={loading} onLoad={loaded}/>
                                                <h2>{"￥"+item.price}</h2>
                                                <h3>{item.brand}</h3>
                                                <h4><span>{"关注人数："+item.popularity}</span>{item.shop}</h4>
                                        </li>
                                        )
                                })
                            }
                        </ul>
                    </div>



                    <Title config={["热门分类","Hot Categories",this.props]}/>
                    <div className="categories">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_t.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_manshose.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_womanshose.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_cloth.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_pag.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/categories_pan.jpg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>


                    <Title config={["活动推荐","Active",this.props]}/>
                    <div className="active">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="src/images/active_online.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/active_26hours.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/active_nike.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/active_ww.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="src/images/active_1899.jpg" alt=""/>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="footer">
                    <Footer config={"home"} func={this.props.router}/>
                </div>
            </div>
        )
    }
}
