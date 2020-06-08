import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  let {logout} = props
  let {name, token} = props.userFromGlobalState
  return (
    <div class="ui menu">
      <div>
        { token ? 
          [
            <div>
              <li>
                <NavLink to="/home"><a class="item">Home</a></NavLink>
                </li>
                <li>
                <NavLink to="/elections">Explore</NavLink>
                </li>
                <li>
                <NavLink to="/following">Following</NavLink>
                </li>
                <li>
                <NavLink to="/profile">Profile</NavLink> 
                </li>
                <li onClick={logout}> 
                  <NavLink to="/">Logout, 
                    {name}
                  </NavLink>
                </li>
            </div>
          ]
          :
          [
            <div>
              <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/explore">Explore</NavLink>
                </li>
                <li>
                <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                <NavLink to="/login">Login</NavLink>
                </li>
            </div>
          ]
        }
        </div>
    </div>
  )
};

let mapStateToProps = (globalState) => {
  return {
    userFromGlobalState: globalState.userInformation
  }
}

export default connect(mapStateToProps)(NavBar);