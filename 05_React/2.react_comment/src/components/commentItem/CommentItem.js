import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CommentItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
  }
  
  //删除评论的方法
  delComment = () => {
    //获取要删除元素的下标
    // console.log(event.target.dataset.index);
    const {item, index, del} = this.props;
    if (window.confirm(`您确认删除${item.name}的评论吗？`)) {
      //删除数据
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