import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './lib/firebase'
import Login from './Pages/Login/Container'
import HomePage from './Pages/HomePage/Container'
import HeaderLink from './Components/Common/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Router>
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Home</span>
            </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text">Category</span>
          </Menu.Item>
        </Menu>
      </Sider>
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
    </Layout>
  </Router>
, document.getElementById('root'))
registerServiceWorker()
