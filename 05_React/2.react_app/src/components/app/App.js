import React, {Component} from 'react';

//定义组件
class App extends Component {
  
  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>用户名</label>
                <input type="text" className="form-control" placeholder="用户名" />
              </div>
              <div className="form-group">
                <label>评论内容</label>
                <textarea className="form-control" rows="6" placeholder="评论内容"></textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default pull-right">提交</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="handle">
                  <a href="javascript:;">删除</a>
                </div>
                <p className="user"><span >xxx</span><span>说:</span></p>
                <p className="centence">React不错!</p>
              </li>
              <li className="list-group-item">
                <div className="handle">
                  <a href="javascript:;">删除</a>
                </div>
                <p className="user"><span >yyy</span><span>说:</span></p>
                <p className="centence">React有点难!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
}

//暴露出去
export default App;
