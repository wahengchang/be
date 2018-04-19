import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/Login/Container';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
