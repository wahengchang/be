/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { signout } from '../../lib/firebase'

import { connect } from 'react-redux'

class Container extends Component {
  signout = ()  => {
    return signout()
    .then( ()=>window.location.replace("/"))
  }
  componentWillMount(){
    return this.signout()
  }
  render () {
    return null
  }
}

export default connect(
  null
)(Container)
