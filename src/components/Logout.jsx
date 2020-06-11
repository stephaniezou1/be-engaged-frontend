import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogOut } from '../actions/users.js'
import { Button } from 'semantic-ui-react';

const Logout = () => {

    let dispatch = useDispatch()

    let handleLogout = () => {
        dispatch(userLogOut())
    }

    return <Button size = "mini" floated="right"> <NavLink to='/' onClick={handleLogout}>Logout</NavLink></Button>
}

export default Logout;