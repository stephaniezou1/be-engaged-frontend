import React from 'react';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';
import NavBar from './containers/NavBar'
import ElectionsContainer from './containers/ElectionsContainer' 
import FollowingContainer from './containers/FollowingContainer'
import HometownContainer from './containers/HometownContainer' 
import ProfileContainer from './containers/ProfileContainer';
import {withRouter} from 'react-router-dom'
import {Route, Switch, Link, NavLink} from 'react-router-dom'


class App extends React.Component {

  state = {
    user: {
      id: 0,
      name: "",
      email: "",
      line1: "",
      city: "",
      state: "",
      zip_code: ""
    },
    token: ""
  }

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

  handleResponse = (response) => {
    if (resp.message) {
      alert(resp.message)
    } else {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
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
        <Switch>

          <Route path="/login" render={this.renderForm } />
          <Route path="/register" render={this.renderForm } />

          <Route path="/home">
            <HometownContainer/>
          </Route>
          <Route path="/explore">
            <ElectionsContainer/>
          </Route>
          <Route path="/following">
            <FollowingContainer/>
          </Route>
          <Route path="/profile">
            <ProfileContainer/>
          </Route>

        </Switch>
      </div>
      </div>
    );
  }
}

let RoutedApp = withRouter(App)
export default RoutedApp;

