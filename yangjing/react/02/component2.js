//兄弟组件的通信
import React from 'react'
import ReactDOM from 'react-dom'

export default class Component2 extends React.Component{
    c2(){
        this.props.p()
    }
    render(){
        return (
            <div>
                <h1></h1>
                <input type='button' value='click me2' onClick={this.c2.bind(this)} />
            </div>
        )
    }
}