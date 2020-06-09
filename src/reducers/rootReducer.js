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
  follow: [],
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
        follow: action.payload.user.follow,
        token: action.payload.token,
        }

    case "DISPLAY_USERS":
        return {
            ...state,
            users: action.payload
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

let initialFollowState = {
    id: 0,
    follows: []
}

let followReducer = (state = initialFollowState, action) => {
    switch(action.type) {
        case "ADD_NEW_FOLLOW":
            let theNewFollow = action.payload
            let copyOfFollows = [...state.follows, theNewFollow]

            return {
                ...state,
                follows: copyOfFollows
            }

        case "DISPLAY_FOLLOWS":
            return {
                ...state,
                follows: action.payload
            }

            default:
                return state
    }
}


let singleObject = {
  electionInformation: electionReducer,
  userInformation : userReducer,
  followInformation : followReducer
}

let rootReducer = combineReducers(singleObject)

export default rootReducer;