import {LOADING, USERS, ERROR} from './types';
import axios from "axios/index";

export const loading = () => ({type: LOADING});

export const users = data => ({type: USERS, data});

export const error = data => ({type: ERROR, data})

export const search = searchName => {
  return dispatch => {
    dispatch(loading());
    const url = `https://api.github.com/search/users?q=${searchName}`;
    axios.get(url)
      .then(res => {
        //获取请求回来的数据
        const {items} = res.data;
        //更新状态为users
        dispatch(users(items));
      })
      .catch(err => {
        console.log(err);
        //更新状态为error
        dispatch(error('网络忙，请稍后再试'));
      })
  }
};

