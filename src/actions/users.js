export const userLogOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const addAUser = (user) => {
    return {
      type: "ADD_A_USER",
      payload: user
    }
}

export const updateUserInfo = (user) => {
    return {
        type: "UPDATE_USER",
        payload: user

    }
}

export const setAllElections = (allElections) => {
    return {
      type: "DISPLAY_ELECTIONS",
      payload: allElections
    }
  }
  
export const setUserInfo = (resp) => {
    return {
      type: "SET_USER_INFO",
      payload: resp
    }
  }