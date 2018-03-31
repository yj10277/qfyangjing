//兄弟组件的通信
import React from 'react'
import ReactDOM from 'react-dom'

export default class Component1 extends React.Component{
    c1(){
        console.log('component1')
    }
    render(){
        return (
            <div>
                <h1></h1>
                <input type='button' value='click me1' onClick={this.c1.bind(this)} />
            </div>
        )
    }
}