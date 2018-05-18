import React, { Component } from 'react'
import './index.css'
import EditorComponent from '../../Components/EditorPage/Editor'

class EditorPage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
				<div className="editorPageWrapper">
					<h1> Editor </h1>

					<div className='editorWrapper'>
						<EditorComponent />
					</div>
        </div>
      );
    }
}

export default EditorPage
