import React from 'react'
import { Editor, createEditorState } from 'medium-draft'
import './index.css'

class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    const { rawContent } = this.props.storyData
    this.state = {
      editorState: createEditorState(rawContent)
    }
  }

  componentDidMount() {
    this.editor.focus()
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
            ref={element => {
              this.editor = element
            }}
            editorState={editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default EditorComponent
