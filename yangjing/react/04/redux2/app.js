import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
//中间件插件（applyMiddleware）
import {createStore,applyMiddleware} from 'redux'
import Reducer from './reducer.js'
import Com from './component.js'
import midd from './ajaxMiddleware.js'

const store =createStore(Reducer,applyMiddleware(midd))
ReactDOM.render(
    <Provider store={store}>
        <Com />
    </Provider>,
    document.querySelector('#app')

)