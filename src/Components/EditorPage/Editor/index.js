import React from 'react'
import { EditorState, convertFromRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createVideoPlugin from 'draft-js-video-plugin'
import { inlineToolbarPlugin } from './InlineToolbar'
import './index.css'
import VideoAdd from './VideoAdd'

const videoPlugin = createVideoPlugin()
const { InlineToolbar } = inlineToolbarPlugin

const plugins = [videoPlugin, inlineToolbarPlugin]

class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    const { rawContent } = this.props.storyData
    const contentState = convertFromRaw(rawContent)
    this.state = {
      editorState: rawContent
        ? EditorState.createWithContent(contentState)
        : EditorState.createEmpty()
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
            plugins={plugins}
          />
          <InlineToolbar />
        </div>
        <div className="uploadBar">
          <VideoAdd
            editorState={this.state.editorState}
            onChange={this.onChange}
            modifier={videoPlugin.addVideo}
          />
        </div>
      </div>
    )
  }
}

export default EditorComponent
