import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class Header extends Component {
  render () {
    const { profile } = this.props.currentUser
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Mission Pozible</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Howdy, {profile.name} <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="dashboard">Dashboard</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={this.props.handleSignout}>Signout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
  handleSignout: PropTypes.func.isRequired
}

export default Header