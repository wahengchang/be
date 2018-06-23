import React from 'react'
import './index.css'

import { Select } from 'antd'
const Option = Select.Option

export default class AddCategoryBloack extends React.Component {
  handleChange = value => {
    const { onHandleChangeCategory } = this.props
    onHandleChangeCategory(value)
  }

  render() {
    const { categorys, selectedCategory } = this.props
    return (
      <div className="addCategoryBlockWrapper">
        <span className="addCategoryTitle"> Category </span>
        <div className="addCategorySelector">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Select a Category"
            onChange={this.handleChange}
            defaultValue={selectedCategory}
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
