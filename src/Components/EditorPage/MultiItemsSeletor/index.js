import React from 'react'
import './index.css'

import { Select } from 'antd'
const Option = Select.Option

export default class MultiItemsSeletor extends React.Component {
  handleChange = value => {
    const { onHandleSelection } = this.props
    onHandleSelection(value)
  }

  render() {
    const { title, items, selectedItems } = this.props
    return (
      <div className="addCategoryBlockWrapper">
        <span className="addCategoryTitle"> {title} </span>
        <div className="addCategorySelector">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Select a Category"
            onChange={this.handleChange}
            defaultValue={selectedItems}
          >
            {items.map(item => (
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
