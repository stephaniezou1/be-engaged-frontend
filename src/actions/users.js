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