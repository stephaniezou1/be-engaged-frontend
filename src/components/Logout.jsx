import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogOut } from '../actions/users.js'
import { Button } from 'semantic-ui-react';

const Logout = () => {

    let dispatch = useDispatch()

    let handleLogout = () => {
        dispatch(userLogOut())
    }

    return <Button> <NavLink to='/' onClick={handleLogout}>Logout</NavLink></Button>
}

export default Logout;