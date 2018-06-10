import React, { Component } from 'react'
import dao from './dao'
import PresentationalComponent from './index'
import firebase from 'firebase'
import { createEditorState } from 'medium-draft'
import { convertToRaw } from 'draft-js'

class Container extends Component {
  constructor(props) {
    super(props)
    this.database = firebase.database()
    this.dao = new dao(this.database)
    this.state = { storys: [] }
  }

  componentDidMount() {
    this.dao.on(storys => {
      return this.setState({ storys })
    })
  }

  createStory = () => {
    const editorState = createEditorState()
    const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    const payload = { data }
    return this.dao.create(payload).then(snap => {
      const res = snap.val()
      const storyList = this.dao.fbListToArray(res)
      const newestStory = storyList[storyList.length - 1]
      return newestStory
    })
  }

  render() {
    const { storys = [] } = this.state
    return <PresentationalComponent storys={storys} createStory={this.createStory} />
  }
}

export default Container
