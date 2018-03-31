import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store.js'
import Com from './component.js'


ReactDOM.render(
    <Provider store={store}>
        <Com />
    </Provider>,
    document.querySelector('#app')
)