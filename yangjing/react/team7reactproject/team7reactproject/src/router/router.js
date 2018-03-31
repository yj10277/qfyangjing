import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/home'
import ShoseComponent from '../components/shose/shosecomponent.js'
import ListComponent from '../components/list/list.js'
import SearchComponent from '../components/search/searchComponent.js'



import LoginComponent from '../components/login/loginComponent.js'
import MycenterComponent from '../components/myCenter/myCenter.js'
import UpdateComponent from '../components/updatemessage/updatemessage.js'
import LocationListComponent from '../components/location/locationList.js'
import AddLocationComponent from '../components/addLocation/addLocation.js'
import CreateOrderComponent from '../components/CreateOrder/CreateOrder.js'




import Shoppingcar from '../components/shoppingcar/shoppingcar.js'
import Xiangqing from '../components/xiangqing/xiangqing.js'
import Gouwu from '../components/gouwu/gouwu.js'
import Dingdan from '../components/dingdan/dingdan.js'
import Dingdandfk from '../components/dingdan/dddfk/dddfk.js'
import Dingdanqb from '../components/dingdan/ddqb/ddqb.js'
import Dingdanywc from '../components/dingdan/ddywc/ddywc.js'

export default (
    <Route>
        <Route path="/" component={HomeComponent}></Route>
        <Route path="/shose" component={ShoseComponent}></Route>
        <Route path="/list" component={ListComponent}></Route>
        <Route path="/search" component={SearchComponent}></Route>





        <Route path="/login" component={LoginComponent} >
        </Route>
        <Route path="/center" component={MycenterComponent} >
        </Route>
        <Route path="/updatemessage" component={UpdateComponent} >
        </Route>
        <Route path="/location" component={LocationListComponent} >
        </Route>
        <Route path="/addlocation" component={AddLocationComponent} >
        </Route>
        <Route path="/creatOrder" component={CreateOrderComponent} >
        </Route>




        <Route path='/car' component={Shoppingcar}/>
        <Route path='/xq' component={Xiangqing}/>
        <Route path='/gw' component={Gouwu}></Route>
        <Route path='/dd' component={Dingdan}>  
            <Route path='/dd/dddfk' component={Dingdandfk}></Route>
            <Route path='/dd/ddqb' component={Dingdanqb}></Route>
            <Route path='/dd/ddywc' component={Dingdanywc}></Route>
        </Route>
    </Route>
)
