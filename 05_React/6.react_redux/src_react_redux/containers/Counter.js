/*
  将ui组件包装成容器组件返回
 */
import {decrement, increment} from "../actions";
import {connect} from "react-redux";

import App from '../components/app/App';

export default connect(
  state => ({value: state}),
  {increment, decrement}
)(App);