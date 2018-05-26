import React, { Component } from 'react'
import PresentationalComponent from './index'
import dao from './dao'
import firebase from 'firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.storyId = this.props.match.params.id
    this.database = firebase.database()
    this.dao = new dao(this.database, this.storyId)
    this.state = { storyData: {} }
  }

  componentDidMount() {
    this.dao.on(storyData => {
      return this.setState({ storyData })
    })
  }

  onHandleSaveStory(id, payload) {
    return this.dao.updateById(id, payload)
  }

  render() {
    const storyId = this.storyId
    const { storyData } = this.state
    return (
      <PresentationalComponent
        storyId={storyId}
        storyData={storyData}
        onHandleSaveStory={this.onHandleSaveStory.bind(this)}
      />
    )
  }
}

export default Container
