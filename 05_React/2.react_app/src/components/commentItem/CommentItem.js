import React, {Component} from 'react';

class CommentItem extends Component {
  constructor (props) {
    super(props);
    //修正this指向
    this.delComment = this.delComment.bind(this);
  }
  //删除评论的方法
  delComment (event) {
    //获取要删除元素的下标
    // console.log(event.target.dataset.index);
    const {item, index} = this.props;
    if (window.confirm(`您确认删除${item.name}的评论吗？`)) {
      //删除指定评论内容
      const {del} = this.props;
      del(index);
    }
  }
  
  render () {
    //声明接受属性
    const {item} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span >{item.name}</span><span>说:</span></p>
        <p className="centence">{item.comment}</p>
      </li>
    )
  }
}

export default CommentItem;