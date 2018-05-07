import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './lib/firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import SideBar from './Components/SideBar'
import BigContent from './Components/BigContent'
import { Layout } from 'antd';

import { Provider } from 'react-redux'

import store from './store'

const Root = ({store}) => 
  <Provider store={store}>
      <Router>
        <Layout>
          <SideBar />
          <BigContent />
        </Layout>
      </Router>
  </Provider>

ReactDOM.render(
  <Root store={store} />
, document.getElementById('root'))
registerServiceWorker()
