/*
  renducer函数：
    状态机
 */
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
  let newState = 0;
  
  switch (action.type) {
    case 'INCREMENT' :
      newState = preState + action.data;
      break;
    case 'DECREMENT' :
      newState = preState - action.data;
      break;
    default :
      newState = preState;
  }
  
  return newState;
}

//暴露出去
export default reducer