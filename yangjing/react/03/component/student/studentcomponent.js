import React from 'react'
import ReactDOM from 'react-dom'

import Modal from '../modal/modal.js'
import Com from '../../utile/common.js'
export default class StudentComponent extends React.Component{
    state = {
       show:false
    }
    showup(){
        this.setState({show:true})
        
       
    }
    filldata(a){
      console.log(a)
      this.setState({show:false})
      this.refs.account.value = a.account;
    }
    render(){
        return (<div>
                  <Modal ref='xianshi' show={this.state.show} filldata={this.filldata.bind(this)}/>
                  <div className="col-lg-6">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." onClick={this.showup.bind(this)} ref='account'/>
                        <span className="input-group-btn">
                           <button className="btn btn-default" type="button">Go!</button>
                        </span>
                      </div>
                  </div>

                </div>)
    }
}