import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }
  
  increment = () => {
    //获取当前状态
    // const {value} = this.state;
    //获取下拉列表的值
    const data = +this.refs.select.value;
    //更新状态
    /*this.setState({
      value: value + number
    })*/
    //触发更新状态
    this.props.increment(data);
  }
  
  decrement = () => {
    //获取当前状态
    // const {value} = this.state;
    //获取下拉列表的值
    const data = +this.refs.select.value;
    //更新状态
    /*this.setState({
      value: value - number
    })*/
    this.props.decrement(data);
  }
  
  incrementIfOdd = () => {
    //获取当前状态
    const value = this.props.value;
    //判断状态是否是奇数
    if (value % 2 === 1) {
      //获取下拉列表的值
      const data = +this.refs.select.value;
      //更新状态
      /*this.setState({
        value: value + number
      })*/
      this.props.increment(data);
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取当前状态
      // const {value} = this.state;
      //获取下拉列表的值
      const data = +this.refs.select.value;
      //更新状态
      /*this.setState({
        value: value + number
      })*/
      this.props.increment(data);
    }, 1000)
  }
  
  render () {
    //获取当前的状态
    const value = this.props.value;
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