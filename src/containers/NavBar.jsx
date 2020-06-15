import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logout from '../components/Logout.jsx'
import Logo from '../components/Logo.jsx'

class NavBar extends Component {
  
  render() {
  
  let { token} = this.props.userFromGlobalState

  return (
    <>

    <Navbar fill="true" bg="light" expand="lg">    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand><Logo/></Navbar.Brand>
      <Nav className="ml-auto" defaultActiveKey="http://localhost:3000/">
        { token ? 
            [
              <>
                <NavLink to="/home" exact className="nav-link"> Home </NavLink>     
                <NavLink to="/elections" exact className="nav-link">Explore</NavLink>
                <NavLink to="/follows" exact className="nav-link">Following</NavLink>
                <NavLink to="/profile" exact className="nav-link">Profile</NavLink> 
                <NavLink to="/"> <Logout/> </NavLink>
                </>
              ]
              :
              [
               <>
                <NavLink to="/" exact className="nav-link"> Home </NavLink> 
                <NavLink to="/elections" exact className="nav-link"> Explore </NavLink>
                <NavLink to="/register" exact className="nav-link"> Register </NavLink>
                <NavLink to="/login" exact className="nav-link"> Login </NavLink>
                </>
            ]
          }
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    )
  };
}

let mapStateToProps = (globalState) => {
  return {
    userFromGlobalState: globalState.userInformation
  }
}

export default connect(mapStateToProps)(NavBar);