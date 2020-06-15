import React, { Component } from 'react';
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
          <Nav className="ml-auto">
            { token ? 
                [
                  <>
                    <Nav.Link href="/home"> Home </Nav.Link>    
                    <Nav.Link href="/elections">Explore</Nav.Link>
                    <Nav.Link href="/follows" >Following</Nav.Link>
                    <Nav.Link href="/profile" >Profile</Nav.Link> 
                    <Nav.Link href="/"> <Logout/> </Nav.Link>
                    </>
                  ]
                  :
                  [
                  <>
                    <Nav.Link href="/"> Home</Nav.Link>
                    <Nav.Link href="/elections"> Explore</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login"> Login </Nav.Link>
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