import React, { Component, PropTypes } from 'react'

class Header extends Component {
  render () {
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
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" onClick={this.props.handleSignout}>Signout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  handleSignout: PropTypes.func.isRequired
}

export default Header