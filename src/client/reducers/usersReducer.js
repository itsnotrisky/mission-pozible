import * as types from '../constants/usersConst'

const initialState = {
  name: '',
  email: ''
}

const usersReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_USER_ACCOUNT:
      return Object.assign(
        {},
        state,
        {
          name: action.user.name,
          email: action.user.email
        }
      )
      break
  }
  return state
}

export default usersReducer