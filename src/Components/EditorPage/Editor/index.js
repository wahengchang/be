import React, { Component } from 'react'
import './index.css'
import DraftJS from 'draft-js'
import firebase from 'firebase'
// import {Editor, EditorState} from 'medium-draft'

import {
    Editor,
    createEditorState,
  } from 'medium-draft';
  
  class EditorComponent extends React.Component {
    constructor(props) {
      super(props);
	
			this.ref = firebase.database().ref('Storys')

      this.state = {
        editorState: createEditorState(), // for empty content
      };
  
      /*
      this.state = {
        editorState: createEditorState(data), // with content
      };
      */
  
      this.onChange = (editorState) => {
				this.setState({ editorState })
				
				// console.log('editorState.getCurrentContent(): ', editorState.getCurrentContent())
				// console.log('editorState.getCurrentContent().getPlainText(): ', editorState.getCurrentContent().getPlainText())

				if(editorState.getCurrentContent().getPlainText().includes('peter')) {
					console.log(' -=-=-=-=-=-=- peter =-=-=-=-=-=')
					this.ref.push().set(DraftJS.convertToRaw(editorState.getCurrentContent()))
				}

      };
    }
  
    componentDidMount() {
      this.refs.editor.focus();
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
