import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

// Redux
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {combineReducers} from 'redux'

let initialElectionState = {
  elections: [],
  selectedElectionId: 0
}

let electionReducer = (state = initialElectionState, action) => {

  switch (action.type) {
    case "ADD_ONE_ELECTION":
      let theElectionToBeAdded = action.payload
      let copyOfElections = [...state.elections, theElectionToBeAdded]

      return {
        ...state,
        elections: copyOfElections
      }

    case "SET_ALL_ELECTIONS":
      return {
        ...state,
        elections: action.payload
      }

    default:
      return state
  }

}

let initialUserState = {
  id: 0,
  name: "",
  email: "",
  line1: "",
  city: "",
  state: "",
  zip_code: "",
  follows: [],
  token: ""
}

let userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        id: action.payload.user.id,
        name: action.payload.user.name,
        email: action.payload.user.email,
        line1: action.payload.user.line1,
        city: action.payload.user.city,
        state: action.payload.user.state,
        zip_code: action.payload.user.zip_code,
        follows: action.payload.user.follows,
        token: action.payload.token,

      }
    default:
      return state
  }
}


let singleObject = {
  electionInformation: electionReducer,
  userInformation : userReducer
}

let rootReducer = combineReducers(singleObject)

let storeObj = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={storeObj}>    
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));