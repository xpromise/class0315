/*
  renducer函数：
    状态机
 */

import {INCREMENT, DECREMENT} from '../config';

function reducer(preState=0, action) {
  console.log('preState:' + preState , action );
  /*
    preState: 先前/当前 状态
    action: 更新的内容
      {
        type: 更新的类型,
        data: 更新的数据
      }
   */
  
  switch (action.type) {
    case INCREMENT :
      return preState + action.data;
    case DECREMENT :
      return preState - action.data;
    default :
      return preState;
  }
  
}

//暴露出去
export default reducer