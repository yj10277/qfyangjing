import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import midd from './ajaxmiddleware.js'
import Reducer from './reducer.js'

const store = createStore(Reducer,applyMiddleware(midd))

export default store;