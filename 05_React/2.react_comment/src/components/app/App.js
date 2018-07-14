import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AddComment from '../addComment/AddComment';
import CommentsList from '../commentsList/CommentsList';

//定义组件
class App extends Component {
  static propTypes = {
    commentsList: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
  }
  
  componentDidMount () {
    this.props.update();
  }
  
  render () {
    const {commentsList, add, del} = this.props;
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
          <AddComment add={add}/>
          <CommentsList commentsList={commentsList} del={del}/>
        </div>
      </div>
    )
  }
  
}

//暴露出去
export default App;
