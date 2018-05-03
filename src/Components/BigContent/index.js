import React, { Component } from 'react'
import './index.css'
import Login from '../../Pages/Login/Container'
import HomePage from '../../Pages/HomePage/Container'
import HeaderLink from '../Common/Header'
import { Route } from 'react-router-dom'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class BigContent extends Component {
  render() {
    return (
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <HeaderLink />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          designed by 
        </Footer>
      </Layout>
    )
  }
}

export default BigContent
