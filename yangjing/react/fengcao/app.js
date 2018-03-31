import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,browserHistory,Link} from 'react-router'



import Shoppingcar from './components/shoppingcar/shoppingcar.js'
import Xiangqing from './components/xiangqing/xiangqing.js'
import Gouwu from './components/gouwu/gouwu.js'
import Dingdan from './components/dingdan/dingdan.js'
import Dingdandfk from './components/dingdan/dddfk/dddfk.js'
import Dingdanqb from './components/dingdan/ddqb/ddqb.js'
import Dingdanywc from './components/dingdan/ddywc/ddywc.js'
ReactDOM.render(
     <Router history={hashHistory}>
       <Route path='/'>
            <Route path='/car' component={Shoppingcar}/>
            <Route path='/xq' component={Xiangqing}/>
            <Route path='/gw' component={Gouwu}></Route>
            <Route path='/dd' component={Dingdan}>
                <Route path='/dd/dddfk' component={Dingdandfk}></Route>
                <Route path='/dd/ddqb' component={Dingdanqb}></Route>
                <Route path='/dd/ddywc' component={Dingdanywc}></Route>
            </Route>
            
       </Route>
     </Router>,
    document.querySelector('#app') 
     
)
                   
            