import React,{Component} from 'react'
import './search.css'
import '../../libs/common/common.js'
import http from '../../utils/HttpClient.js'
export default class SearchComponent extends Component{
    searchSome(){
        var keyword = this.refs.keyword.value;
        this.props.router.push({pathname:'/list',state:{searchContent:keyword}})
    }
    render(){
        return(
            <div> 
                <header className="search-head">
                    <span>  
                    <i className="fa fa-search" aria-hidden="true" ></i>
                    <input type="text" placeholder="请输入关键字" ref="keyword"/>
                    </span>
                    <span onClick={goback}>取消</span>
                    <span onClick={this.searchSome.bind(this)}>搜索</span>
                </header>
                <main className="search-main">
                    <p><span></span><span >热门搜索</span></p>
                    <ul>
                        <li>Supreme</li>
                        <li>Nike</li>
                        <li>adidas Originals</li>
                        <li>Air Jordan</li>
                        <li>卫衣</li>
                        <li>男鞋</li>
                        <li>adidas</li>
                        <li>vans</li>
                        <li>Champion</li>
                        <li>VLONE</li>
                    </ul>

                </main>
            </div>

        )
    }
}