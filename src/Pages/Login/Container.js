import React, { Component } from 'react'
import PresentationalComponent from './index'

import { connect } from 'react-redux'

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {currentUser: null}
  }

  componentDidMount () {
  }

  render () {
    const {set} = this.props
    const {currentUser} = this.state

    console.log('set: ', set)

    return (
      <div>
        <button onClick={set}> click me </button>
        <PresentationalComponent
          currentUser={currentUser}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { history: state.history }
}

function mapDispatchToProps(dispatch) {
  return {
    set: (state = {}, action) => {
      setTimeout(() => {
        return dispatch({type: 'ALERT_ACTION'})
      }, 3000);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

// export default Container
