import React from 'react'
import './index.css'

import { Select, Row, Col } from 'antd'
const Option = Select.Option

export default class AddCategoryBloack extends React.Component {
  render() {
    const { categorys } = this.props

    function handleChange(value) {
      console.log(`selected ${value}`)
    }
    return (
      <div className="addCategoryBlockWrapper">
        <span className="addCategoryTitle"> Category </span>
        <div className="addCategorySelector">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Select a Category"
            onChange={handleChange}
          >
            {categorys.map(item => (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}
