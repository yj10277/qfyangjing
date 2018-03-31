import React from 'react'
import {Route} from 'react-router'
import HomeComponent from '../component/home/home.js'
import StudentComponent from '../component/student/studentcomponent.js'
export default (
      <Route path='/' component={HomeComponent}>
            <Route path='/student' component={StudentComponent}></Route>
      </Route>
    )