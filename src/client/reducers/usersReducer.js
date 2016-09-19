import * as types from '../constants/usersConst'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  isSignupFail: false,
  isSigninFail: false,
  statusText: null
}

const usersReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, { isSignupFail: false, statusText: null })
      break
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, { isSignupFail: false, statusText: null })
      break
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, { isSignupFail: true, statusText: action.error.reason })
      break
    case types.SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true,
        isAuthenticated: false,
        isSigninFail: false,
        statusText: null })
      break
    case types.SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        isSigninFail: false,
        statusText: null })
      break
    case types.SIGNIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        isSigninFail: true,
        statusText: action.error.reason })
      break
  }
  return state
}

export default usersReducer