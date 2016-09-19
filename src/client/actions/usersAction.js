import * as types from '../constants/usersConst'

const signUpRequest = () => {
  return {
    type: types.SIGNUP_REQUEST
  }
}

const signUpSuccess = () => {
  return {
    type: types.SIGNUP_SUCCESS
  }
}

const signUpFailure = (error) => {
  return {
    type: types.SIGNUP_FAILURE,
    error
  }
}


export const createUser = (user) => {
  return (dispatch) => {
    dispatch(signUpRequest())
    Accounts.createUser({
      email: user.email,
      password: user.password,
      profile: {
        name: user.name
      }
    }, function(error){
      if(error){
        console.log(error)
        dispatch(signUpFailure(error))
      } else {
        dispatch(signUpSuccess())
      }
    })
  }
}