import React, { Component } from 'react';
import dao from './dao'
import PresentationalComponent from './index'
import firebase from 'firebase';

class Container extends Component {
  constructor(props){
    super(props)
    this.database = firebase.database()
    this.dao = new dao(this.database)
    this.state = {storys: []}
  }

  componentDidMount(){
    this.dao.on(storys => {
      return this.setState({storys})
    })
  }

  render() {
    const {storys = []} = this.state
    return (
      <PresentationalComponent storys={storys}/>
    );
  }
}

export default Container;
