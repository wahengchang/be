import PropTypes from 'prop-types'
import React from 'react'
import { AtomicBlockUtils, EditorState } from 'draft-js'
import styled from 'styled-components'

export default class VideoSideBtn extends React.Component {
  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.addEmbedURL = this.addEmbedURL.bind(this)
  }

  onClick() {
    const url = window.prompt('Enter a URL', 'insert video link url, please')
    this.props.close()
    if (!url) {
      return
    }
    this.addEmbedURL(url)
  }

  addEmbedURL(url) {
    let editorState = this.props.getEditorState()
    const content = editorState.getCurrentContent()
    const contentWithEntity = content.createEntity('embed', 'IMMUTABLE', { url })
    const entityKey = contentWithEntity.getLastCreatedEntityKey()
    editorState = EditorState.push(editorState, contentWithEntity, 'create-entity')
    this.props.setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, 'E'))
  }

  render() {
    return (
      <VideoButton title="Add an embed Video" onClick={this.onClick}>
        Video
      </VideoButton>
    )
  }
}

const VideoButton = styled.button`
  border: 1px solid #5b5b5b;
  color: #6d6d6d;
  cursor: pointer;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 20px;
  margin-right: 2px;
  padding: 8px;
  text-align: center;
  transition: all 0.2s ease;
`
