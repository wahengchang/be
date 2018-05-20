import React, { Component } from 'react'
import './index.css'
import { Row, Button} from 'antd'
import DraftJS from 'draft-js'
import EditorComponent from '../../Components/EditorPage/Editor'

class EditorPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        msg: null
      }
    }

    reset(){
      this.setState({msg: null})
    }

    onHandleSaveStory = () => {
      const {storyId} = this.props
      const editorState = this.refs.editorComponent.state.editorState
      const data = JSON.stringify(
          DraftJS.convertToRaw(
          editorState.getCurrentContent()
        )
      )
      const payload = { data }
      this.setState({msg: 'Updating story ...'})
      return this.props.onHandleSaveStory(storyId, payload)
      .then(()=> this.reset())
    }

    render() {
      const {msg} = this.state
      const {storyId, storyData} = this.props
      return (
				<div className="editorPageWrapper">
					<h1> Editor of {storyId}</h1>
          <Row style={{margin: "20px 0"}}> 
            <Button onClick={this.onHandleSaveStory}> Save </Button>
            {msg && <span> {msg} </span>}
          </Row>
					<div className='editorWrapper'>
            {
              storyData &&
              !global.isEmptyObject(storyData) &&
              <EditorComponent ref="editorComponent" storyData={storyData}/>
            }
					</div>
        </div>
      );
    }
}

export default EditorPage
