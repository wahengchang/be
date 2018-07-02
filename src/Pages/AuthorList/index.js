import React, { Component } from 'react'
import './index.css'
import { Row, Col, Button, Icon } from 'antd'
import { timestampToDateFormat } from '../../lib/time'

const rowStyle = {
  height: '50px',
  borderTop: '1px solid lightgray',
  lineHeight: '50px'
}

/*eslint no-useless-constructor: 0*/
class HomePage extends Component {
  state = {}

  handleCreate = () => {
    return this.props.createAuthor().then(newestAuthor => {
      return window.location.replace(`/author/${newestAuthor.id}`)
    })
  }
  render() {
    const { authors } = this.props
    return (
      <div className="App">
        <h1> Author </h1>
        <Row style={{ marginBottom: '20px' }}>
          <Button onClick={this.handleCreate}> New </Button>
        </Row>

        {authors.map((item, index) => {
          const { name, description, imageUrl, createdAt, id } = item
          return (
            <Row gutter={10} key={index} style={rowStyle}>
              {/* <Col span={4}> {index}</Col> */}
              <Col span={6}>
                <a href={`/author/${id}`}>
                  <Icon type="edit" />
                  <span> {name} </span>
                </a>
              </Col>
              <Col span={6}>
                {imageUrl ? <img src={imageUrl} className="userImage" /> : <p> Not found</p>}
              </Col>
              <Col span={6}> {description}</Col>
              <Col span={6}> {timestampToDateFormat(createdAt)} </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
export default HomePage
