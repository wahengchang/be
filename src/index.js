import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './lib/firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import SideBar from './Components/SideBar'
import BigContent from './Components/BigContent'
import { Layout } from 'antd';

ReactDOM.render(
  <Router>
    <Layout>
      <SideBar />
      <BigContent />
    </Layout>
  </Router>
, document.getElementById('root'))
registerServiceWorker()
