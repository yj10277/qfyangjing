import React from 'react'
import ReactDOM from 'react-dom'
// import {connect} from 'react-redux'
// 

import './list.scss'
import '../../libs/common/common.js'
import http from '../../utils/HttpClient.js'
var brandFirst;
var brandImg;
export default class ShoseComponent extends React.Component{
    state={
        dataset:[],
        sort:"asc",
        colName:"popularity",
        fuzzySearch:"a"
    }
    // ================================选择性别======================================
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

    // ===========================选择品牌==============================================
    selecting(e){
        var tar=e.target.parentNode;
        var str=tar.getAttribute('data-brand')
        if(str){
            var lis=tar.parentNode.children;
            for(var i=0;i<lis.length;i++){
                lis[i].style.borderBottom="0";
            }
            tar.style.borderBottom="0.07rem solid #000";
            http.post('getPros',{brand:str}).then((res)=>{
                this.setState({
                    dataset:res.data.result
                })
            })
        }
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
    gotoCart(){
        this.props.router.push({pathname:'/car'});
    }
    gotoList(){
        this.props.router.push('/shose');
    }

  //===============================渲染前获取数据========================================= 

    componentWillMount(){
        if(this.props.location.state){
            if(this.props.location.state.searchContent===""){
                http.post('fuzzySearchPro',{params:this.state.fuzzySearch}).then((res)=>{
                    this.setState({
                        dataset:res.data.result
                    })
                })
                
            }else if(this.props.location.state.searchContent){
                http.post('fuzzySearchPro',{params:this.props.location.state.searchContent}).then((res)=>{
                        this.setState({
                            dataset:res.data.result
                        })
                    })
            }else{
                brandFirst = this.props.location.state.brand;
                http.post('getPros',{brand:brandFirst,colName:this.state.colName,sort:"asc"}).then((res)=>{
                        this.setState({
                            dataset:res.data.result
                        })
                    })
            }
        }else{
            http.post('fuzzySearchPro',{params:this.state.fuzzySearch}).then((res)=>{
                    this.setState({
                        dataset:res.data.result
                    })
                })
        }
    }

    // =============================给nav添加事件（排序）==========================================
    componentDidMount(id){
        var spans=document.getElementsByClassName("sort");
        for(let i=0;i<spans.length;i++){
            spans[i].addEventListener('click',function(e){
                var oldColName=e.target.getAttribute("data-colName")
                var _colName=e.target.getAttribute("data-colName")
                if(this.props.location.state){
                    if(this.props.location.state.searchContent===''){
                        for(let i=0;i<e.target.parentNode.children.length;i++){
                            e.target.parentNode.children[i].style.color="#ccc"
                        }
                        if(oldColName!=this.state.colName){
                            e.target.style.color="red"
                            http.post('getPros',{brand:brandFirst,colName:_colName,sort:"asc"}).then((res)=>{
                                this.setState({
                                    dataset:res.data.result,
                                    colName:_colName
                                })
                            })
                        }
                    }else if(this.props.location.state.searchContent){
                        for(let i=0;i<e.target.parentNode.children.length;i++){
                            e.target.parentNode.children[i].style.color="#ccc";
                        }
                        if(oldColName!=this.state.colName){
                            e.target.style.color="red"
                            http.post('fuzzySearchPro',{params:this.props.location.state.searchContent,colName:_colName,sort:"asc"}).then((res)=>{
                                    this.setState({
                                        dataset:res.data.result,
                                        colName:_colName
                                    })
                                })
                        }
                    }else{
                        for(let i=0;i<e.target.parentNode.children.length;i++){
                            e.target.parentNode.children[i].style.color="#ccc"
                        }
                        if(oldColName!=this.state.colName){
                            e.target.style.color="red"
                            http.post('getPros',{brand:brandFirst,colName:_colName,sort:"asc"}).then((res)=>{
                                this.setState({
                                    dataset:res.data.result,
                                    colName:_colName
                                })
                            })
                        }
                    }
                }else{
                     for(let i=0;i<e.target.parentNode.children.length;i++){
                            e.target.parentNode.children[i].style.color="#ccc";
                        }
                        if(oldColName!=this.state.colName){
                            e.target.style.color="red"
                            http.post('fuzzySearchPro',{params:this.state.fuzzySearch,colName:_colName,sort:"asc"}).then((res)=>{
                                    this.setState({
                                        dataset:res.data.result,
                                        colName:_colName
                                    })
                                })
                        }
                }
            }.bind(this))
        }
    }

    render(){
        return(
            <div className="listContainer">
                <div className="header">
                    <span><i className="fa fa-chevron-left" onClick={this.gotoList.bind(this)}></i></span>
                    <input type="text" placeholder="SEARCH" onFocus={this.gotoSearch.bind(this)}/>
                    <span onClick={this.gotoCart}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></span>
                </div>
                <div className="Listnav">
                    <span className="sort active" data-colName="popularity">人气</span>
                    <span className="sort" data-colName="sales">销量</span>
                    <span className="sort" data-colName="newest">新品</span>
                    <span className="sort" data-colName="price">价格</span>
                    <span className=""></span>
                    <span className="specialSpan">{this.state.dataset.length}</span>
                    <span className="">items</span>
                </div>
                <div className="main">
                     <ul>
                        {
                             this.state.dataset.map((item)=>{ 
                                return <li key={item.id} data-id={item.id} data-img={item.img} onClick={this.GotoDetail.bind(this)}>
                                            <img src="src/images/loading.gif" alt={item.introduce} onError={loading} onLoad={loaded}/>
                                            <p>{"￥"+item.price}</p>
                                            <h5>{item.name}</h5>
                                            <h6>{item.introduce}</h6>
                                            <h6>{item.shop}</h6>
                                        </li>
                            })
                        }
                     </ul>
                </div>
            </div>
        )
    }
}
