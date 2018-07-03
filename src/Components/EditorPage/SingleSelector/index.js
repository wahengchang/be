import React from 'react'
import '../MultiItemsSeletor/index.css'
import { Select } from 'antd'
import { squareDiv } from '../../../lib/style'
const Option = Select.Option

export default class SingleSelector extends React.Component {
  handleChange = value => {
    const { onHandleSelection } = this.props
    onHandleSelection(value)
  }

  render() {
    const { title, items, selectedItem } = this.props
    return (
      <div className="addCategoryBlockWrapper">
        <span className="addCategoryTitle"> {title} </span>
        <div className="addCategorySelector">
          <Select
            style={{ width: '200px' }}
            placeholder="Select a Category"
            onChange={this.handleChange}
            defaultValue={selectedItem}
          >
            {items.map(item => (
              <Option value={item.id} key={item.id}>
                <div className="editorAuthorSelectorWrapper">
                  <div>{item.name}</div>
                  <div className="editorAuthorImageWrapper" style={squareDiv(item.imageUrl)} />
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}
