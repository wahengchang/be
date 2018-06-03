import React from 'react'
import { EditorState, convertFromRaw } from 'draft-js'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import { inlineToolbarPlugin } from './InlineToolbar'
import './index.css'

const { InlineToolbar } = inlineToolbarPlugin

const plugins = [inlineToolbarPlugin]

class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    const { rawContent } = this.props.storyData
    const contentState = convertFromRaw(rawContent)
    this.state = {
      editorState: rawContent ? EditorState.createWithContent(contentState) : EditorState.createWithContent()
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
      <div className="editorComponentWrapper">
        <Editor
          ref={element => {
            this.editor = element
          }}
          editorState={editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
        <InlineToolbar />
      </div>
    )
  }
}

export default EditorComponent
