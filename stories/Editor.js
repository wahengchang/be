import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import EditorComponent from '../src/Components/EditorPage/Editor'
import DraftJS, {EditorState} from 'draft-js'

const style = {
  border: 'black solid 1px',
  width: '500px',
  padding: '10px 5px'
}

storiesOf('MyEditor', module)
.add('with some emoji', () => {
  const emptyState = EditorState.createEmpty()
  
  const storyData = {
    rawContent: DraftJS.convertToRaw(emptyState.getCurrentContent())
  }

  return <div style={style}>
    <EditorComponent
      storyData = {storyData}
    />
  </div>

});
