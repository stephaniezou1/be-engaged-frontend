import React from 'react';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';
import NavBar from './containers/NavBar'
import ElectionsContainer from './containers/ElectionsContainer' 
import FollowingContainer from './containers/FollowsContainer'
import HometownContainer from './containers/HometownContainer' 
import HomepageContainer from './containers/HomepageContainer' 
import ProfileContainer from './containers/ProfileContainer';
import {withRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux'
import { userLogOut, addAUser } from './actions/users';


class App extends React.Component {

  // post copy of user to the follow endpoint
  // create a new follow id with the user ID and election ID

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/users/stay_logged_in", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
    fetch("http://localhost:3000/elections")
    .then(r => r.json())
    .then((elections) => {
      this.props.setAllElections(elections)
    })
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(this.handleResponse)
  }
  
  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    localStorage.token = resp.token
    this.props.setUserInfo(resp)
    this.props.history.push("/profile")
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login") {
      return <LoginForm 
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <RegisterForm 
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = () => {
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token}/>
    } else {
      this.props.history.push("/login")
    }
  }

  followAnElection = (electionInfo) => {
    fetch(`http://localhost:3000/follows`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },

      body: JSON.stringify(electionInfo)
    })
    .then(response => response.json())
    .then((newFollow) => {
      this.props.setFollowInfo(newFollow)
    })
  }

  render () {
    return (
      <div>
      <div className="App">
        <header className="Nav-Bar">
          <NavBar />
        </header>
      </div>
      <div>
        <div>
        <Switch>
          <Route exact path="/login" render={this.renderForm } />
          <Route exact path="/register" render={this.renderForm } />
          <Route exact path="/">
            <HomepageContainer/>
          </Route>
          <Route exact path="/home">
            <HometownContainer/>
          </Route>
          <Route exact path="/elections">
            <ElectionsContainer followAnElection={this.followAnElection}/>
          </Route>
          <Route exact path="/follows">
            <FollowingContainer/>
          </Route>
          <Route exact path="/profile">
            <ProfileContainer/>
          </Route>
        </Switch>
        </div>
      </div>
      </div>
    );
  }
}

let MagicalComponent = withRouter(App)

let setAllElections = (allElections) => {
  return {
    type: "DISPLAY_ELECTIONS",
    payload: allElections
  }
}

let setUserInfo = (resp) => {
  return {
    type: "SET_USER_INFO",
    payload: resp
  }
}

let setFollowInfo = (resp) => {
  return {
    type: "ADD_NEW_FOLLOW",
    payload: resp
  }
}

let mapDispatchToProps = {
  setAllElections: setAllElections,
  setUserInfo: setUserInfo,
  setFollowInfo: setFollowInfo,
  userLogOut: userLogOut
}

let mapStateToProps = (globalState) => {
  return {
    elections: globalState.electionInformation.elections,
    token: globalState.userInformation.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)

