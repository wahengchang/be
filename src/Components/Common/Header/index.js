import React from 'react'
import { Route, Link } from 'react-router-dom'

const matchFun = (url, title) => ({match}) => (
  <li className={match ? 'active' : ''}>
    <Link to={url}>
      {match ? '> ' : ''} {title}
    </Link>
  </li>
)

const RouteLink = ({url, exact = false, title}) => (
  <Route
    path={url}
    exact={exact}
    children={matchFun(url, title)}
  />
)

const Header = () => (
  <div>
    <ul>
      <RouteLink url='/' exact={true} title='Home'/>
      <RouteLink url='/login' title='Login'/>
    </ul>
  </div>
)
export default Header
