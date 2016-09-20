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

export const signInRequest = () => {
  return {
    type: types.SIGNIN_REQUEST
  }
}

export const signInSuccess = () => {
  return {
    type: types.SIGNIN_SUCCESS
  }
}

export const signInFailure = (error) => {
  return {
    type: types.SIGNIN_FAILURE,
    error
  }
}

export const signOutRequest = () => {
  return {
    type: types.SIGNOUT_REQUEST
  }
}

export const signOutSuccess = () => {
  return {
    type: types.SIGNOUT_SUCCESS
  }
}

export const signOutFailure = (error) => {
  return {
    type: types.SIGNOUT_FAILURE,
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

export const signInUser = (user) => {
  return (dispatch) => {
    dispatch(signInRequest())
    Meteor.loginWithPassword(user.email, user.password, function(error){
      if(error){
        console.log(error)
        dispatch(signInFailure(error))
      } else {
        dispatch(signInSuccess())
        dispatch(push('/dashboard'))
      }
    });
  }
}

export const signOutUser = (user) => {
  return (dispatch) => {
    dispatch(signOutRequest())
    Meteor.logout(function(error){
      if(error){
        console.log(error)
        dispatch(signOutFailure(error))
      } else {
        dispatch(signOutSuccess())
        dispatch(push('/'))
      }
    });
  }
}

export const unauthorizedAccess = () => {
  return (dispatch) => {
    dispatch(signInFailure({reason: "Unauthorized Access"}))
    dispatch(push('/'))
  }
}