import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import {createStore} from 'redux'
import Reducer from './reducer.js'
const store = createStore(Reducer)

import Counter from './component.js'

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.querySelector('#app')
)