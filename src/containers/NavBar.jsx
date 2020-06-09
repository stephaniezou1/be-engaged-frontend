import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  let {logout} = props
  let {name, token} = props.userFromGlobalState
  return (
    <Menu>
        { token ? 
          [
            <div>
              <Menu.Item>
                <a class="item"><NavLink to="/home" exact >Home</NavLink></a>      
              </Menu.Item> 
              <Menu.Item> 
                <a class="item"><NavLink to="/elections" exact >Explore</NavLink></a>
              </Menu.Item>    
              <Menu.Item>
                <a class="item"><NavLink to="/following" exact >Following</NavLink></a>
              </Menu.Item> 
              <Menu.Item>
                <a class="item"><NavLink to="/profile" exact >Profile</NavLink> </a>
              </Menu.Item>  
              <Menu.Item>
                <a class="item" onClick={logout}> 
                <NavLink to="/">Logout, {name} </NavLink></a>
              </Menu.Item>
            </div>
          ]
          :
          [
            <div>
                <Menu.Item>
                  <a class="item"><NavLink to="/" exact >Home</NavLink></a>
                </Menu.Item>
                <Menu.Item>
                  <a class="item"><NavLink to="/elections" exact >Explore</NavLink></a>
                </Menu.Item>
                <Menu.Item>
                  <a class="item"><NavLink to="/register" exact >Register</NavLink></a>
                </Menu.Item>
                <Menu.Item>
                  <a class="item"><NavLink to="/login" exact >Login</NavLink></a>
                </Menu.Item>
            </div>
          ]
        }
    </Menu>
  )
};

let mapStateToProps = (globalState) => {
  return {
    userFromGlobalState: globalState.userInformation
  }
}

export default connect(mapStateToProps)(NavBar);