import React from 'react'
import ReactDOM from 'react-dom'

const h1 = <h1>yangjing</h1>
ReactDOM.render(
    h1,
    document.querySelector('#app')

);

//组件
class Component1 extends React.Component{
    static defaultProps = {
        name:'tvxq',
        age:23
    }
    static propsTypes = {
        name:React.PropTypes.string.isRequired
    }
    render(){
        return <h1>yangjing2{this.props.name}{this.props.age}{this.props.children}</h1>
    }
}
ReactDOM.render(
    <Component1 name='tom' age='30'><span>span1</span><span>span2</span></Component1>,
    document.querySelector('#app')  
    )


//React.Children.map
class Component2 extends React.Component{
    render(){
        return <h1>
                    {React.Children.map(this.props.children,(red)=>{
                        return red
                    })}
                </h1>
    }
}
ReactDOM.render(
    <Component2><span>yuan1</span><span>yuan2</span></Component2>,
    document.querySelector('#app')
    )


//事件
class Component3 extends React.Component{
    focus(){
        console.log(this);
        this.refs.in1.focus();
    }
    render(){
        return <div>

            <input type='text' ref='in1'/>
            <input type='button' value='button' onClick={this.focus.bind(this)}/>
        </div>
    }
}

ReactDOM.render(
    <Component3>

    </Component3>,
    document.querySelector('#app')
    )
//事件数据单项驱动
class Component4 extends React.Component{
    static defaultProps = {
        name:'props'
    }
    change(){
        this.setState({
            name:this.refs.in1.value
        })
    }
    state = {
        name:'com4'
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}{this.props.name}</h1>  
                <input type='text' ref='in1' onChange={this.change.bind(this)}/>
            </div>

        )
    }
}

ReactDOM.render(
    <Component4>

    </Component4>,
    document.querySelector('#app')
    )


