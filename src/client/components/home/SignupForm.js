import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

class SignupForm extends Component {
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
    const { handleSubmit, isSignupFail, statusText } = this.props
    return (
      <form className="form-signin" onSubmit={handleSubmit}>
        { isSignupFail ? this.showAlert(statusText) : '' }
        <label htmlFor="inputName" className="sr-only">Name</label>
        <Field type="text"
          name="inputName"
          id="inputName"
          className="form-control"
          placeholder="Name"
          component="input"
          required />
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
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        <Link to="/" className="btn btn-lg btn-default btn-block">Have an account? Sign in</Link>
      </form>
    )
  }
}

const mapStateToProps = function(store) {
  const { isSignupFail, statusText } = store.user
  return {
    isSignupFail,
    statusText
  };
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm);

export default connect(mapStateToProps)(SignupForm)