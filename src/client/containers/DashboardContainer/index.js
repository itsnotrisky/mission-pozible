import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/usersAction'
import Header from './Header'
import Sidebar from './Sidebar'

class DashboardContainer extends Component {
  handleSignout() {
    this.props.dispatch(actions.signOutUser())
  }

  render() {
    return (
      <div>
        <Header handleSignout={this.handleSignout.bind(this)} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2">
              <Sidebar />
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(DashboardContainer)