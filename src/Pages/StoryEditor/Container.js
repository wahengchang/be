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
      categorys: [],
      selectedCategory: []
    }
  }

  componentDidMount() {
    this.daoStory.on(storyData => {
      const { categorys = {} } = storyData
      const selectedCategory = Object.entries(categorys).map(item => item[0])
      return this.setState({ storyData, selectedCategory })
    })

    this.daoCategorys.on(categorys => {
      return this.setState({ categorys })
    })
  }

  onHandleSaveStory(id, payload) {
    return this.daoStory.updateById(id, payload)
  }

  onHandleChangeCategory(selectedCategory) {
    this.setState({ selectedCategory })
  }

  render() {
    const storyId = this.storyId
    const { storyData, categorys, selectedCategory } = this.state
    return (
      <PresentationalComponent
        storyId={storyId}
        storyData={storyData}
        categorys={categorys}
        selectedCategory={selectedCategory}
        onHandleChangeCategory={this.onHandleChangeCategory.bind(this)}
        onHandleSaveStory={this.onHandleSaveStory.bind(this)}
      />
    )
  }
}

export default Container
