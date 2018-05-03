import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class SideBar extends Component {
  render() {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to='/'>
              <Icon type="user" />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/category'>
              <Icon type="user" />
              <span className="nav-text">Category</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SideBar
