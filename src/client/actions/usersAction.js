import * as types from '../constants/usersConst'
import { push } from 'react-router-redux';

export const signUpRequest = () => {
  return {
    type: types.SIGNUP_REQUEST
  }
}

export const signUpSuccess = () => {
  return {
    type: types.SIGNUP_SUCCESS
  }
}

export const signUpFailure = (error) => {
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
        dispatch(push('/dashboard'))
      }
    })
  }
}