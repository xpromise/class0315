import React, {Component} from 'react';
import {
  NavLink,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import News from '../news/News';
import Message from '../message/Message';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li><NavLink to="/home/news" activeClassName="myActive">News</NavLink></li>
            <li><NavLink to="/home/message" activeClassName="myActive">Message</NavLink></li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="/home/news"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;