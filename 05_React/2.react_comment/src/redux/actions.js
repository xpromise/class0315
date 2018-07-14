import {ADD_COMMENT, DEL_COMMENT, GET_COMMNETS} from './types';

export const add = data => ({type: ADD_COMMENT, data});

export const del = data => ({type: DEL_COMMENT, data});

export const get = data => ({type: GET_COMMNETS, data});

export const update = () => {
  return dispatch => {
    setTimeout(() => {
      const commentsList = [
        {name: '黄诗云', comment: '今天天气真晴朗'},
        {name: '刘上洪', comment: '楼上好多人'}
      ];
      dispatch(get(commentsList))
    }, 1000)
  }
}

