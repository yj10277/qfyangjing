import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from 'react-router'
import routes from './router/router.js'
import '../../bootstrap-3.3.7-dist/css/bootstrap.css'
import '../../js/jquery-3.2.1.js'
ReactDOM.render(
    <Router history={hashHistory} routes={routes}/>,
    document.querySelector('#app')
    )