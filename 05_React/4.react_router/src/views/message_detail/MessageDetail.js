import React, {Component} from 'react';

class MessageDetail extends Component {
  render () {
    console.log(this.props);
    //获取params参数
    const {id} = this.props.match.params;
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: message00{id}</li>
        <li>Content: message content00{id}</li>
      </ul>
    )
  }
}

export default MessageDetail;