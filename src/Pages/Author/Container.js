import React, { Component } from 'react'
import PresentationalComponent from './index'
import dao from './dao'
import firebase from 'firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.authorId = this.props.match.params.id
    this.database = firebase.database()
    this.dao = new dao(this.database, this.authorId)
    this.state = { author: null }
  }

  updateAuthorById = (id, payload) => {
    return this.dao.updateById(id, payload)
  }

  componentDidMount() {
    this.dao.on(author => {
      return this.setState({ author })
    })
  }

  render() {
    const { author = null } = this.state
    return (
      author && (
        <PresentationalComponent
          author={author}
          createAuthor={this.createAuthor}
          updateAuthorById={this.updateAuthorById}
        />
      )
    )
  }
}

export default Container
