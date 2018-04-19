import React, { Component } from 'react';
import PresentationalComponent from './index'

class Container extends Component {
  constructor(props){
    super(props)
    this.state = {currentUser: null}
  }

  componentDidMount(){
  }

  render() {
    const {currentUser} = this.state
    return (
      <PresentationalComponent
        currentUser={currentUser}
        />
    );
  }
}

export default Container;
