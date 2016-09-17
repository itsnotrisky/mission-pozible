import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
  render() {
    return (
      <form className="form-signin">
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
      </form>
    )
  }
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm);

export default SigninForm