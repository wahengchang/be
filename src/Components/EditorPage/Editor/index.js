import React from 'react'
import './index.css'
import { Editor,createEditorState } from 'medium-draft'
  
  class EditorComponent extends React.Component {
    constructor(props) {
      super(props)
      const {rawContent} = this.props.storyData
      this.state = {
        editorState: createEditorState(rawContent)
      }
    }
  
    componentDidMount() {
      this.refs.editor.focus();
    }

    onChange = (editorState) => {
      return this.setState({ editorState })
    }

    render() {
      const { editorState } = this.state;
      return (
        <div className="editorComponentWrapper">
					<Editor
							ref="editor"
							editorState={editorState}
							onChange={this.onChange} />
        </div>
      )
    }
  }

export default EditorComponent
