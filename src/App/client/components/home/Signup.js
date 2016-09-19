import React, { Component } from 'react'
import * as actions from '../../actions/usersAction'
import SignupForm from './SignupForm'

class Signup extends Component {
  handleSignup(values) {
    const { inputName, inputEmail, inputPassword } = values
    // console.log(inputName, inputEmail, inputPassword)
    this.props.dispatch(actions.createUser({
      name: inputName,
      email: inputEmail,
      password:inputPassword
    }))
  }

  render() {
    return (
      <SignupForm
        onSubmit={this.handleSignup} />
    )
  }
}

export default Signup