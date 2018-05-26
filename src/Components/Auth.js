/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../lib/firebase'

class Container extends Component {
  componentDidMount() {
    return getCurrentUser(loginUser => {
      const isLogin = loginUser && loginUser.email ? true : false
      return this.props.set({
        ...loginUser,
        isLogin
      })
    })
  }
  render() {
    return this.props.children
  }
}

const setAction = (payload = null) => {
  return dispatch => {
    const type = 'SET_CURRENT_USER'
    return dispatch({ type, payload })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    set: (currentUser = null) => {
      if (currentUser) return dispatch(setAction(currentUser))
    }
  }
}

export default connect(null, mapDispatchToProps)(Container)
