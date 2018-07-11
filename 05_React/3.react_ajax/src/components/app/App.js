import React, {Component} from 'react';

import Search from '../search/Search';
import List from '../list/List';

class App extends Component {
  state = {
    searchName: ''
  }
  
  search = (searchName) => {
    console.log(searchName);
    //更新状态
    this.setState({searchName});
  }
  
  render () {
    const {searchName} = this.state;
    return (
      <div className="container">
        <Search search={this.search}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

export default App;