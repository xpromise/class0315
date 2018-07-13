import React, {Component} from 'react';

class App extends Component {
  
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
    this.props.store.dispatch({type: 'INCREMENT', data})
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
    this.props.store.dispatch({type: 'DECREMENT', data})
  }
  
  incrementIfOdd = () => {
    //获取当前状态
    const value = this.props.store.getState();
    //判断状态是否是奇数
    if (value % 2 === 1) {
      //获取下拉列表的值
      const data = +this.refs.select.value;
      //更新状态
      /*this.setState({
        value: value + number
      })*/
      this.props.store.dispatch({type: 'INCREMENT', data})
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
      this.props.store.dispatch({type: 'INCREMENT', data})
    }, 1000)
  }
  
  render () {
    //获取当前的状态
    const value = this.props.store.getState();
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