import React, {Component} from 'react';

class AddComment extends Component {
  constructor (props) {
    super(props);
    //修正this指向
    this.addComment = this.addComment.bind(this);
  }
  //添加评论的方法
  addComment () {
    //获取用户填写的数据
    const name = this.refs.name.value.trim();
    const comment = this.refs.comment.value.trim();
    //判断用户填写的数据是否符合规范
    if (!name || !comment) {
      alert('输入的内容不能为空！！');
      return
    }
    //将数据添加到App组件中
    const {add} = this.props;
    add({name, comment});
    //清空输入框数据
    this.refs.name.value = '';
    this.refs.comment.value = '';
  }
  
  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref="name" type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref="comment" className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
}

//暴露出去
export default AddComment;