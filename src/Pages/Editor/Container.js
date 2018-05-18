import React, { Component } from 'react';
import PresentationalComponent from './index'

class Container extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <PresentationalComponent/>
    );
  }
}

export default Container;
