import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as action from './action.js'
import './component.css'


class Lb extends Component{
    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    render(){
        
        return <div>
                    <input type='button' onClick={this.props.sj1} value='列表1'/>
                    <input type='button' onClick={this.props.sj2} value='列表2'/>
                    <input type='button' onClick={this.props.student} value='列表3'/>
                    <table>
                        <thead>
                            <tr >
                                {
                                    this.getKeys(this.props.dataset[0]).map((item)=>{
                                    return <th key={Math.random()}>{item}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                          {
                            this.props.dataset.map((a)=>{
                                return <tr key={Math.random()}>
                                          {
                                            this.getKeys(a).map((key)=>{
                                                return <td key={Math.random()}>{a[key]}</td>  
                                            })
                                          }  
                                       </tr>
                            })
                          }
                        </tbody>
                    </table>
                    

               </div>
    }
}

const sjprops = (state)=>{
    return {
        dataset:state||[]
    }
}
export default connect(sjprops,action)(Lb)