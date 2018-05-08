import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import routers from '../../router/privateConfig'
const { Content, Footer } = Layout;

class BigContent extends Component {
  render() {
    const {path, component} = routers[0]
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Route exact path={path} component={component}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          designed by 
        </Footer>
      </Layout>
    )
  }
}

export default BigContent
