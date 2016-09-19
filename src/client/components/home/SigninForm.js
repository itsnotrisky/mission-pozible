import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

class SigninForm extends Component {
  showAlert(message) {
    return (
      <div className="alert alert-danger alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    )
  }

  render() {
    const { handleSubmit, isSigninFail, statusText } = this.props
    return (
      <form className="form-signin" onSubmit={handleSubmit}>
        { isSigninFail ? this.showAlert(statusText) : '' }
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <Field type="email"
          name="inputEmail"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          component="input"
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <Field type="password"
          name="inputPassword"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          component="input"
          required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <Link to="sign_up" className="btn btn-lg btn-default btn-block">No account yet? Sign up</Link>
      </form>
    )
  }
}

const mapStateToProps = function(state) {
  const { isSigninFail, statusText } = state.user
  return {
    isSigninFail,
    statusText
  };
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm);

export default connect(mapStateToProps)(SigninForm)