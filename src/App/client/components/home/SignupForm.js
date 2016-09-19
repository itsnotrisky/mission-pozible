import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

const SignupForm = (props) => {
    const { handleSubmit } = props
    return (
      <form className="form-signin" onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'signup'
})(SignupForm)