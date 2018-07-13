import React, {Component} from 'react';

class App extends Component {
  state = {
    value: 0
  }
  
  increment = () => {
    //获取当前状态
    const {value} = this.state;
    //获取下拉列表的值
    const number = +this.refs.select.value;
    //更新状态
    this.setState({
      value: value + number
    })
  }
  
  decrement = () => {
    //获取当前状态
    const {value} = this.state;
    //获取下拉列表的值
    const number = +this.refs.select.value;
    //更新状态
    this.setState({
      value: value - number
    })
  }
  
  incrementIfOdd = () => {
    //获取当前状态
    const {value} = this.state;
    //判断状态是否是奇数
    if (value % 2 === 1) {
      //获取下拉列表的值
      const number = +this.refs.select.value;
      //更新状态
      this.setState({
        value: value + number
      })
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取当前状态
      const {value} = this.state;
      //获取下拉列表的值
      const number = +this.refs.select.value;
      //更新状态
      this.setState({
        value: value + number
      })
    }, 1000)
  }
  
  render () {
    const {value} = this.state;
    return (
      <div>
        <h2>click {value} times</h2>
        <select ref="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

export default App;