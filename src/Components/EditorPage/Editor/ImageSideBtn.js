import { ImageSideButton, Block, addNewBlock } from 'medium-draft'
import 'isomorphic-fetch'
import './ImageSideBtn.css'
import firebase from '../../../lib/firebase'

export default class ImageSideBtn extends ImageSideButton {
  /*
    We will only check for first file and also whether
    it is an image or not.
    */
  async onChange(e) {
    const { close, setEditorState, getEditorState } = this.props
    const file = e.target.files[0]
    const name = file.name
    const storageRef = firebase.storage().ref()

    if (file.type.indexOf('image/') !== 0) {
      close()
      throw new Error('Uploaded file is not images.')
    }

    const snapshoot = await storageRef.child(`images/${name}`).put(file)
    const downloadURL = await snapshoot.ref.getDownloadURL()

    setEditorState(
      addNewBlock(getEditorState(), Block.IMAGE, {
        src: downloadURL
      })
    )
    close()
  }
}
