import React, { Component } from 'react'
import './index.css'
import { Row, Button } from 'antd'
import DraftJS from 'draft-js'
import EditorComponent from '../../Components/EditorPage/Editor'
import MultiItemsSeletor from '../../Components/EditorPage/MultiItemsSeletor'

class EditorPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: null
    }
  }

  reset() {
    this.setState({ msg: null })
  }

  onHandleSaveStory = () => {
    const { storyId, selectedCategory = [] } = this.props
    const editorState = this.refs.editorComponent.state.editorState
    const data = JSON.stringify(DraftJS.convertToRaw(editorState.getCurrentContent()))
    const categorys = {}
    selectedCategory.forEach(item => (categorys[item] = true))
    const payload = { data, categorys }
    this.setState({ msg: 'Updating story ...' })
    return this.props.onHandleSaveStory(storyId, payload).then(() => this.reset())
  }

  render() {
    const { msg } = this.state
    const { storyId, storyData, categorys, selectedCategory, onHandleChangeCategory } = this.props
    return (
      <div className="editorPageWrapper">
        <div className="editorPageTitleBox">
          <h1> Editor of {storyId}</h1>
          <Button onClick={this.onHandleSaveStory} type="primary">
            {' '}
            Save{' '}
          </Button>
        </div>
        <Row style={{ margin: '20px 0' }}>{msg && <span> {msg} </span>}</Row>

        <div>
          {categorys &&
            categorys.length > 1 && (
              <MultiItemsSeletor
                title='Categorys'
                items={categorys}
                selectedItems={selectedCategory}
                onHandleSelection={onHandleChangeCategory}
              />
            )}
        </div>
        <div className="editorWrapper">
          {storyData &&
            !global.isEmptyObject(storyData) && (
              <EditorComponent ref="editorComponent" storyData={storyData} />
            )}
        </div>
      </div>
    )
  }
}

export default EditorPage
