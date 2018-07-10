import React, {Component} from 'react';
import logo from './logo.svg';

//定义组件
class App extends Component {
  
  render () {
    return (
      <div>
        <h1>react脚手架项目</h1>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
  
}

//暴露出去
export default App;
