import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App.jsx';
// import AppChat from './chat/AppChat.jsx';
import ChatBox from './chat/ChatBox.jsx';
import Profile from './Profile.jsx';
import AppCall from './AppCall_test.jsx';

// Email:kon@gmail.com
// pas:123123

const Root = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/chat">AppChat</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/call">AppCall</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/chat" component={ChatBox} />
      <Route path="/profile" component={Profile} />
      <Route path="/call" component={AppCall} />
    </div>
  </BrowserRouter>
);

export default Root;
