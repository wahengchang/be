import React, { Component } from 'react'
import PresentationalComponent from './index'
import daoCategorys from '../../lib/dao/categorys'
import { database } from '../../lib/firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.database = database
    this.daoCategorys = new daoCategorys(this.database)
    this.state = { categorys: [] }
  }

  componentDidMount() {
    this.daoCategorys.on(categorys => {
      return this.setState({ categorys })
    })
  }

  updateCategoryById = (id, payload) => {
    return this.daoCategorys.updateById(id, payload)
  }
  createCategory = payload => {
    return this.daoCategorys.create(payload)
  }

  render() {
    const { categorys = [] } = this.state
    return (
      <PresentationalComponent
        categorys={categorys}
        updateCategoryById={this.updateCategoryById}
        createCategory={this.createCategory}
      />
    )
  }
}

export default Container
