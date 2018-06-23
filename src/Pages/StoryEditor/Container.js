import React, { Component } from 'react'
import PresentationalComponent from './index'
import daoStory from '../../lib/dao/story'
import daoCategorys from '../../lib/dao/categorys'
import firebase from 'firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.storyId = this.props.match.params.id
    this.database = firebase.database()
    this.daoStory = new daoStory(this.database, this.storyId)
    this.daoCategorys = new daoCategorys(this.database)
    this.state = {
      storyData: {},
      categorys: []
    }
  }

  componentDidMount() {
    this.daoStory.on(storyData => {
      return this.setState({ storyData })
    })

    this.daoCategorys.on(categorys => {
      return this.setState({ categorys })
    })
  }

  onHandleSaveStory(id, payload) {
    return this.daoStory.updateById(id, payload)
  }

  render() {
    const storyId = this.storyId
    const { storyData, categorys } = this.state
    return (
      <PresentationalComponent
        storyId={storyId}
        storyData={storyData}
        categorys={categorys}
        onHandleSaveStory={this.onHandleSaveStory.bind(this)}
      />
    )
  }
}

export default Container
