import React from 'react'
import { Editor, createEditorState } from 'medium-draft'
import './index.css'
import ImageSideBtn from './ImageSideBtn'

class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    const { rawContent } = this.props.storyData
    this.state = {
      editorState: createEditorState(rawContent)
    }

    this.sideButtons = [
      {
        title: 'Image',
        component: ImageSideBtn
      }
    ]
  }

  componentDidMount() {
    this.refs.editor.focus()
  }

  onChange = editorState => {
    return this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="editorLayout">
        <div className="editorComponentWrapper">
          <Editor
            ref="editor"
            editorState={editorState}
            onChange={this.onChange}
            sideButtons={this.sideButtons}
          />
        </div>
        <div className="uploadBar" />
      </div>
    )
  }
}

export default EditorComponent
