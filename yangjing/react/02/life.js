//生命周期
import React from 'react'
import ReactDOM from 'react-dom'

class Life extends React.Component{
    state = {
        data:0
    }
    set(){

        this.setState({
            data:this.state.data + 1
        })
    }
    shouldComponentUpdate(newprops,newstate){
        console.log(newprops,newstate)
        return newstate.data % 2 == 0;
    }
    componentWillUpdate(){
        console.log('shouldComponentUpdate为true是才执行')
    }
    render(){
        return <div>
                    <button onClick={this.set.bind(this)}>button</button>
                    <h3>{this.state.data}</h3>
               </div>
    }
}

ReactDOM.render(<Life />,document.querySelector('#app'))


