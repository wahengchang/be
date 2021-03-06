import { ImageSideButton, Block, addNewBlock } from 'medium-draft'
import 'isomorphic-fetch'
import './ImageSideBtn.css'

export default class ImageSideBtn extends ImageSideButton {
  /*
    We will only check for first file and also whether
    it is an image or not.
    */
  onChange(e) {
    const file = e.target.files[0]
    const name = file.name

    if (file.type.indexOf('image/') === 0) {
      const formData = new FormData()
      formData.append('file', file, name)
      formData.append('name', name)
      fetch('/ajax/upload', {
        method: 'POST',
        body: formData
      }).then(response => {
        if (response.status === 200) {
          // Assuming server responds with
          // `{ "url": "http://example-cdn.com/image.jpg"}`
          return response.json().then(data => {
            if (data.url) {
              this.props.setEditorState(
                addNewBlock(this.props.getEditorState(), Block.IMAGE, {
                  src: data.url
                })
              )
            }
          })
        }
      })
    }
    this.props.close()
  }

  // render() {
  //   return (
  //     <ImageButton title="Upload an Image from local">
  //       Image
  //     </ImageButton>
  //   )
  // }
}
