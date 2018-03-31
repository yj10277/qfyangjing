import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from './action.js'
import Laoing from './spinner/spinner.js'
class Lb extends Component{
    getKeys(item){

        return item ? Object.keys(item) : [];
    }
    render(){
        
        return <div>
                    
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
                    
                    <Laoing show={this.props.show}></Laoing>
               </div>
    }
}
const sjprops = (state)=>{
        console.log(state)
        return {
                    dataset:state.dataset||[],
                    show:state.show
                }
}
export default connect(sjprops,action)(Lb)
