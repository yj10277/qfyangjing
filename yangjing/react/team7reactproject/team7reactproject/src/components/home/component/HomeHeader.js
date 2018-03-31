import React from 'react'
import ReactDOM from 'react-dom'


export default class HomeHeaderComponent extends React.Component{

    gotoList(){
        this.props.config[2].router.push("/list")
    }
    render(){
        return(
            <div className="hotbrands">
                <div className="leftside">
                    <h1>{this.props.config[0]}</h1>
                    <h2>{this.props.config[1]}</h2>
                </div>
                <div className="rightside" onClick={this.gotoList.bind(this)}>查看更多<i className="fa fa-angle-right next"></i></div>
            </div> 
        )
    }
}