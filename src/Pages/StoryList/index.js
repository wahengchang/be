import React, { Component } from 'react'
import './index.css'
import { Row, Col, Button, Icon} from 'antd'
import {timestampToDateFormat} from '../../lib/time'

const rowStyle = {
  height: "50px",
  borderTop: "1px solid lightgray",
  lineHeight: "50px"
}

class StoryPage extends Component {
    render() {
      const {storys = []} = this.props
      return (
				<div className="storyPageWrapper">
					<h1> Storys </h1>
          <Row style={{marginBottom: "20px"}}> 
            <Button href='/'> New </Button>
          </Row>
					<div className='storyWrapper'>
          {
            storys.map((item, index) => {
              const {id, name, createdAt=''} = item
              return <Row gutter={10} key={index} style={rowStyle}>
                  <Col span={4}> {index}</Col >
                  <Col span={10}>
                    <a href={`/storys/${id}`}>
                      <Icon type="edit" />
                      <span> {name} </span>
                    </a>
                  </Col >
                  <Col span={10}> {timestampToDateFormat(createdAt)} </Col >
                </Row>
              })
          }
					</div>
        </div>
      );
    }
}

export default StoryPage
