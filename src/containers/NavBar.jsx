import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { Menu, Header, Icon, Container} from 'semantic-ui-react'
import Logout from '../components/Logout.jsx'
import Logo from '../components/Logo.jsx'

class NavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
  
  let { token} = this.props.userFromGlobalState
  const { activeItem } = this.state

  return (
    <>
      <Menu id="nav-bar" fluid widths={5}>
        { token ? 
          [
            <>
              <Menu.Item name = "home" active={activeItem === 'home'} onClick={this.handleItemClick}>
                <NavLink to="/home" exact > Home </NavLink>      
              </Menu.Item> 
              <Menu.Item name = "explore" active={activeItem === 'explore'} onClick={this.handleItemClick}> 
                <NavLink to="/elections" exact >Explore</NavLink>
              </Menu.Item>
              <Menu.Item> 
                <Logo/>
              </Menu.Item>
              <Menu.Item name = "following" active={activeItem === 'following'} onClick={this.handleItemClick}>
                <NavLink to="/follows" exact >Following</NavLink>
              </Menu.Item> 
              <Menu.Item name = "profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
                <NavLink to="/profile" exact >Profile</NavLink> 
              </Menu.Item>  
              </>
              ]
              :
              [
               <>
                <Menu.Item name = "home" active={activeItem === 'home'} onClick={this.handleItemClick}>
                  <NavLink to="/" exact > Home </NavLink>
                </Menu.Item>
                <Menu.Item name = "explore" active={activeItem === 'explore'} onClick={this.handleItemClick}>
                  <NavLink to="/elections" exact > Explore </NavLink>
                </Menu.Item>
                <Menu.Item> 
                  <Logo/>
                </Menu.Item>
                <Menu.Item name = "register" active={activeItem === 'register'} onClick={this.handleItemClick}>
                  <NavLink to="/register" exact > Register </NavLink>
                </Menu.Item>
                <Menu.Item name = "login" active={activeItem === 'login'} onClick={this.handleItemClick}>
                <NavLink to="/login" exact > Login </NavLink>
                </Menu.Item>
              </>
          ]
        }
    </Menu>
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