import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/usersAction'
import SigninForm from './SigninForm'

class Signin extends Component {
  handleSignin(values) {
    const { inputEmail, inputPassword } = values
    this.props.dispatch(actions.signInUser({
      email: inputEmail,
      password:inputPassword
    }))
  }

  render() {
    return (
      <SigninForm
        onSubmit={this.handleSignin.bind(this)} />
    )
  }
}

export default connect()(Signin)