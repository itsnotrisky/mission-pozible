import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/usersAction'
import SignupForm from './SignupForm'

class Signup extends Component {
  handleSignup(values) {
    const { inputName, inputEmail, inputPassword } = values
    this.props.dispatch(actions.createUser({
      name: inputName,
      email: inputEmail,
      password:inputPassword
    }))
  }

  render() {
    return (
      <SignupForm
        onSubmit={this.handleSignup.bind(this)} />
    )
  }
}

export default connect()(Signup)