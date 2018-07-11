import React, {Component} from 'react';
import {
  NavLink,
  Route
} from 'react-router-dom';

import MessageDetail from '../message_detail/MessageDetail';

class Message extends Component {
  state = {
    message: []
  }
  
  componentDidMount () {
    setTimeout(() => {
      //得到请求的数据，更新状态
      this.setState({
        message: [
          {id: '1', data: 'message001'},
          {id: '2', data: 'message002'},
          {id: '4', data: 'message004'}
        ]
      })
    }, 1000)
  }
  
  render () {
    const {message} = this.state;
    const {history} = this.props;
    // console.log(this.props);
    return (
      <div>
        <ul>
          {
            message.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={"/home/message/" + item.id} >{item.data}</NavLink> &nbsp;&nbsp;
                  <button onClick={() => {history.push('/home/message/' + item.id)}}>push</button> &nbsp;
                  <button onClick={() => {history.replace('/home/message/' + item.id)}}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => history.goForward()}>前进</button>
        <button onClick={() => history.goBack()}>后退</button>
        <Route path="/home/message/:id" component={MessageDetail} />
      </div>
    )
  }
}

export default Message;