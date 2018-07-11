import React, {Component} from 'react';

class News extends Component {
  state = {
    data: ['News001', 'News003', 'News005']
  }
  render () {
    const {data} = this.state;
    return (
      <ul>
        {
          data.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    )
  }
}

export default News;