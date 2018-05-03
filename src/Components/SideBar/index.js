import React, { Component } from 'react'
import './index.css'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import { params } from '../../lib/router'
const { Sider } = Layout;

const siderMenu = ({match}) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[match.url]}>
      <Menu.Item key="/home">
        <Link to={params.home.path}>
          <Icon type="user" />
          <span className="nav-text">Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/category">
        <Link to={params.category.path}>
          <Icon type="user" />
          <span className="nav-text">Category</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

class SideBar extends Component {
  render() {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Route path="/:id" component={siderMenu} />
      </Sider>
    )
  }
}

export default SideBar
