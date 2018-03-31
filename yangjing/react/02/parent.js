//兄弟组件的通信
import React from 'react'
import ReactDOM from 'react-dom'

import Component1 from './component1.js'
import Component2 from './component2.js'

export default class Parent extends React.Component{
    p1(){
        // console.log(this.props)
        this.refs.c1.c1();
    }
    render(){
        return <div>
                    <Component1 ref='c1'/>
                    <Component2 ref='c2' p={this.p1.bind(this)} />
               </div>
    }
}