import * as types from '../constants/usersConst'

export const createUser = (user) => {
  console.log(user)
  return {
    type: types.CREATE_USER_ACCOUNT,
    user
  }
}