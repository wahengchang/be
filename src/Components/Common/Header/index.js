import React from 'react'
import { Route , Link } from 'react-router-dom'
import './Header.css'

const matchFun = (url, title) => ({match}) => (
  <div className={match ? 'active' : ''}>
    <Link to={url}>
      {match ? '> ' : ''} {title}
    </Link>
  </div>
)

const RouteLink = ({url, exact = false, title}) => (
  <Route
    path={url}
    exact={exact}
    children={matchFun(url, title)}
  />
)

const Header = () => (
  <div className="headerWrapper">
      <RouteLink url='/' exact={true} title='Home'/>
      <RouteLink url='/login' title='Login'/>
  </div>
)
export default Header
