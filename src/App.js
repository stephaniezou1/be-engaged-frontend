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
import Logout from './components/Logout.jsx'

// routing
import {withRouter} from 'react-router-dom'
import {Route, Switch, NavLink} from 'react-router-dom'

import {connect} from 'react-redux'
import { userLogOut, setUserInfo, setAllElections } from './actions/users';


class App extends React.Component {

  state = {
    searchTerm: ""  
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
    console.log("response!", resp)
    if (resp.user) {
      localStorage.token = resp.token
      this.props.setUserInfo(resp)
      this.props.history.push("/home")
    } else {
      alert(resp.message)
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
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token}/>
    } else {
      this.props.history.push("/login")
    }
  }

  handleSearchTerm = (termFromChild) => {
    this.setState({
        searchTerm: termFromChild
    })
  }

  decideWhichArrayToRender = () => {
      let {searchTerm} = this.state
      let arrayToReturn = this.props.elections  
      if (searchTerm === "") {
          return arrayToReturn
      } else {
        arrayToReturn = this.props.elections.filter((election) => {
            return election.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }
    return arrayToReturn
  }


  render () {
    console.log("APP STATE", this.state.searchTerm)
    console.log("PROPS", this.props.elections)

    return (
        <div>
          <NavBar />
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
            <ElectionsContainer 
              handleSearchTerm={this.handleSearchTerm}
              elections={this.decideWhichArrayToRender()}
              searchTerm={this.state.searchTerm}
            />
          </Route>
          <Route exact path="/follows">
            <FollowingContainer/>
          </Route>
          <Route exact path="/profile">
            <ProfileContainer />
          </Route>
        </Switch>
        </div>
    );
  }
}

let MagicalComponent = withRouter(App)

let mapDispatchToProps = {
  setAllElections: setAllElections,
  setUserInfo: setUserInfo,
  userLogOut: userLogOut,
}

let mapStateToProps = (globalState) => {
  return {
    elections: globalState.electionInformation.elections,
    token: globalState.userInformation.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)

