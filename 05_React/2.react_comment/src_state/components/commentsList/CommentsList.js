import React, {Component} from 'react';
import CommentItem from '../commentItem/CommentItem';

class CommentsList extends Component {
  render () {
    //接受通过props传递进来的数据
    const {commentsList} = this.props;
    //判断是否显示或隐藏
    const display = commentsList.length ? 'none' : 'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentsList.map((item, index) => <CommentItem item={item} key={index} index={index}/>)
          }
        </ul>
      </div>
    )
  }
  
}

export default CommentsList;