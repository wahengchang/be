import React, { Component } from 'react'
import { signin } from '../../lib/firebase'
import PresentationalComponent from './index'

import { connect } from 'react-redux'

class Container extends Component {
  signin = (email, password) => {
    return signin(email, password)
  }
  render() {
    const { currentUser } = this.props

    return (
      <div>
        <PresentationalComponent
          currentUser={currentUser}
          signin={this.signin}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Container)

// export default Container
