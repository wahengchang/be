/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Container extends Component {
  render () {
    const {currentUser} = this.props
    if (currentUser && currentUser.isLogin) {
      return this.props.children
    } else {
      return null
    }
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

export default connect(
  mapStateToProps
)(Container)