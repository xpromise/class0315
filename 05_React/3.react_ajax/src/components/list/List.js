import React, {Component} from 'react';

class List extends Component {
  
  render () {
    const {firstView, loading, users, error} = this.props;
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