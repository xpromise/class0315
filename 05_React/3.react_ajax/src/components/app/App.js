import React, {Component} from 'react';

import Search from '../../containers/Search';
import List from '../../containers/List';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}

export default App;