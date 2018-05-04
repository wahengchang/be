import React, { Component } from 'react'
import './index.css'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import routers from '../../router'
const { Sider } = Layout
const { Item } = Menu

const RowItem = ({path, title}) => {
    return (
      <Item key={title}>
        <Link to={path}>
          <Icon type='user' />
          <span className="nav-text">{title}</span>
        </Link>
      </Item>
    )
}

const SiderMenu = ({match}) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[match.url]}>
      {routers.map(RowItem)}
    </Menu>
  )
}

class SideBar extends Component {
  render() {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Route path="/" component={SiderMenu} />
      </Sider>
    )
  }
}

export default SideBar
