//路由
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,browserHistory,Link} from 'react-router'

class RootComponent extends React.Component{
    render(){
        return   <div>RootComponent{this.props.children}</div>
                    
    }
}

class Component1 extends React.Component{
    render(){
        return <h1>Component1--{this.props.params.username}</h1>
    }
}

class Component2 extends React.Component{
    render(){
        return <h1>Component2</h1>
    }
}
//嵌套路由
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={RootComponent}>
            <Route path='/c1(/:username)' component={Component1}/>
            <Route path='/c2' component={Component2}/>
        </Route>
    </Router>,
    document.querySelector('#app')

)
//普通路由
// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path='/' component={RootComponent}/>
//         <Route path='/c1' component={Component1}/>
//         <Route path='/c2' component={Component2}/>
//     </Router>,
//     document.querySelector('#app')
// )

                        
                        
                    
                
