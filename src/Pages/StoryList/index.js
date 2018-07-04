import React, { Component } from 'react'
import './index.css'
import { Row, Col, Button, Icon } from 'antd'
import { timestampToDateFormat } from '../../lib/time'
import { squareDiv } from '../../lib/style'

const rowStyle = {
  height: '50px',
  borderTop: '1px solid lightgray',
  lineHeight: '50px'
}

class StoryPage extends Component {
  findCategorysByCatMapping(targetCategorys = {}) {
    if (!targetCategorys || global.isEmptyObject(targetCategorys)) return []

    const { categorys } = this.props
    const targetCatIds = Object.entries(targetCategorys).map(([key, val]) => key)
    return categorys.filter(catItem => targetCatIds.some(targetId => targetId === catItem.id))
  }
  findAuthorById(authorId = '') {
    if (!authorId) return {}
    const { authors } = this.props
    return authors.find(item => item.id === authorId) || {}
  }
  handleCreate = () => {
    return this.props.createStory().then(newestStory => {
      return window.location.replace(`/storys/${newestStory.id}`)
    })
  }
  render() {
    const { storys = [], categorys, authors } = this.props
    return (
      <div className="storyPageWrapper">
        <h1> Storys </h1>
        <Row style={{ marginBottom: '20px' }}>
          <Button onClick={this.handleCreate}> New </Button>
        </Row>
        <div className="storyWrapper">
          {storys.map((item, index) => {
            const { id, name, categorys, author, createdAt = '' } = item
            const targetAuthor = this.findAuthorById(author)
            // console.log('item: ', item)
            return (
              <Row gutter={10} key={index} style={rowStyle}>
                <Col span={6}>
                  {targetAuthor.name && (
                    <a href={`/author/${targetAuthor.id}`}>
                      <div className="UserWrapperImageEditorList">
                        <div
                          className="spuareUserImageEditorList"
                          style={squareDiv(targetAuthor.imageUrl)}
                        />
                        <span> {targetAuthor.name} </span>
                      </div>
                    </a>
                  )}
                </Col>
                <Col span={8}>
                  <a href={`/storys/${id}`}>
                    <Icon type="edit" />
                    <span> {name} </span>
                  </a>
                </Col>
                <Col span={8}>
                  {this.findCategorysByCatMapping(categorys).map(item => (
                    <span key={item.name}> {item.name} </span>
                  ))}
                </Col>
                <Col span={2}> {timestampToDateFormat(createdAt)} </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}

export default StoryPage
