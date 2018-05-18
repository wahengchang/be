import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import EditorComponent from '../src/Components/EditorPage/Editor'

const style = {
  border: 'black solid 1px',
  width: '500px',
  padding: '10px 5px'
}

storiesOf('MyEditor', module)
.add('with some emoji', () => (
  <div style={style}>
    <EditorComponent/>
  </div>
));
