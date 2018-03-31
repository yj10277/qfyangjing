import React, {Component} from 'react'

export default class HomeComponent extends React.Component{
    render(){
        return <div>{this.props.children}</div>
    }
}