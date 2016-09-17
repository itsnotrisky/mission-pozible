import React, { Component } from 'react'

class HomeContainer extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default HomeContainer