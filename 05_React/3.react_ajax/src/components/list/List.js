import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  state = {
    firstView: true,
    loading: false,
    users: null,
    error: ''
  }
  componentWillReceiveProps (nextProps) {
    //更新状态为loading
    this.setState({
      loading: true,
      firstView: false
    })
    // console.log(nextProps);
    //获取传递进来的属性
    const {searchName} = nextProps;
    //发送ajax
    const url = `https://api.github.com/search/users?q=${searchName}`;
    axios.get(url)
      .then(res => {
        //获取请求回来的数据
        const {items} = res.data;
        //更新状态为users
        this.setState({
          users: items,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
        //更新状态为error
        this.setState({
          error: '网络忙，请稍后再试',
          loading: false
        })
      })
  }
  
  render () {
    const {firstView, loading, users, error} = this.state;
    if (firstView) {
      return <h2>Enter name to search</h2>
    } else if (loading) {
      return <h2>loading...</h2>
    } else if (users) {
      return (
        <div className="row">
          {
            users.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <a href={item.html_url} target="_blank">
                    <img src={item.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return <h2>{error}</h2>
    }
    
  }
}

export default List;