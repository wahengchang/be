import React, { Component } from 'react'
import daoAuthors from '../../lib/dao/authors'
import PresentationalComponent from './index'
import { database } from '../../lib/firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.database = database
    this.daoAuthors = new daoAuthors(this.database)
    this.state = { authors: [] }
  }

  componentDidMount() {
    this.daoAuthors.on(authors => {
      return this.setState({ authors })
    })
  }

  createAuthor = () => {
    return this.daoAuthors.create().then(snap => {
      const res = snap.val()
      const authorList = this.daoAuthors.fbListToArray(res)
      const newestAuthor = authorList[authorList.length - 1]
      return newestAuthor
    })
  }

  render() {
    const { authors = [] } = this.state
    return <PresentationalComponent authors={authors} createAuthor={this.createAuthor} />
  }
}

export default Container
