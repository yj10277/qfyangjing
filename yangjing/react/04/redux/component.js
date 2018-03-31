import React from 'react'
import {connect} from 'react-redux'

import * as Actions from './action.js'
//把里面两个函数合并成Actions对象，相当于 import {jia,jian} from './action.js'
class Counter extends React.Component{
    render(){
        return <div>
                    <h3>{this.props.count}</h3>
                    <input type='button' value='加' onClick={this.props.jia} />
                    <input type='button' value='减' onClick={this.props.jian} />


               </div>
    }
}

const Countprops = (state)=>{
    return {count:state}
}

//对象合并
export default connect(Countprops,Actions)(Counter);