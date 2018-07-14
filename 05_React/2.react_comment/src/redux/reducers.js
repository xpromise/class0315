import {ADD_COMMENT, DEL_COMMENT, GET_COMMNETS} from './types';
//初始化状态

function reducer(preState=[], action) {
  console.log(preState, action);
  switch (action.type) {
    case ADD_COMMENT :
      return [action.data, ...preState];
    case DEL_COMMENT :
      return preState.filter((item, index) => index !== action.data);
    case GET_COMMNETS :
      return action.data;
    default :
      return preState;
  }
}

export default reducer;