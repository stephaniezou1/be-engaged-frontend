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

    case "DISPLAY_ELECTIONS":
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

    case "ADD_A_USER":
      let theUserToBeAdded = action.payload
      let copyOfUsers = [...state.users, theUserToBeAdded]

      return {
        ...state,
        users: copyOfUsers
      }

    case "SET_USER_INFO":
        return {
        ...state,
        id: action.payload.user.id,
        name: action.payload.user.name,
        email: action.payload.user.email,
        line1: action.payload.user.line1,
        city: action.payload.user.city,
        state: action.payload.user.state,
        zip_code: action.payload.user.zipcode,
        follows: action.payload.user.follows,
        token: action.payload.token,
        }
    
    case "ADD_NEW_FOLLOW":
      // debugger;
      let followToBeAdded = action.payload
      let copyOfFollows = [...state.follows, followToBeAdded]
      return {
        ...state,
        follows: copyOfFollows
      }

    case "UNFOLLOW":
      // debugger;
      return { 
        ...state,
        follows: state.follows.filter(follow => follow !== action.payload )
        }

    case "LOG_OUT":
        localStorage.clear();
        return {
        ...state, ...initialUserState
        }
      
    default:
      return state

  }
}


let singleObject = {
  electionInformation: electionReducer,
  userInformation : userReducer,
  // followInformation : followReducer
}

let rootReducer = combineReducers(singleObject)

export default rootReducer;