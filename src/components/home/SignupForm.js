import React, { Component } from 'react'

class SigninForm extends Component {
  render() {
    return (
      <form className="form-signin">
        <label htmlFor="inputName" className="sr-only">Name</label>
        <input type="email" id="inputName" className="form-control" placeholder="Name" required />
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      </form>
    )
  }
}

export default SigninForm