import React, { Component } from 'react'
import './index.css'

/*eslint no-useless-constructor: 0*/
class HomePage extends Component {
  constructor(){
    super()

  }

  componentDidMount(){
  }

  render() {
    const {categorys = []} = this.props

    return (
      <div className="App">
        <div>
          {
            categorys.map((item, index) => (<div key={index}>
              <span>{item.id}</span>
              <span>{item.name}</span>
            </div>))
          }
        </div>
      </div>
    )
  }
}

export default HomePage
