import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import Chat from '../Components/Chat'
import Home from '../Components/Home'
import Join from '../Components/Join'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
const Routes = () => {
    return (
        <Router>
            {/* <Route path='/' element={< Home />} /> */}
            <Route path='/login' element={< Login />} />
            <Route path='/' element={< Join />} />
            <Route path='/chat' element={< Chat />} />
          
            <Route path='/register' element={< SignUp />} />
        </Router>
    )
}
export default Routes
