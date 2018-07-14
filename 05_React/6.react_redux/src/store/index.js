import {createStore, applyMiddleware} from 'redux';
//引入thunk
import thunk from 'redux-thunk';
//引入reducer函数
import reducer from '../reducers';
//创建store对象
const store = createStore(reducer, applyMiddleware(thunk));  //需要传入reducer函数

//暴露出去
export default store;