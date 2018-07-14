import {LOADING, USERS, ERROR} from './types';

const initState = {
  firstView: true,
  loading: false,
  users: null,
  error: ''
}

function reducer(preState=initState, action) {
  switch (action.type) {
    case LOADING :
      return {
        firstView: false,
        loading: true
      };
    case USERS :
      return {
        loading: false,
        users: action.data
      };
    case ERROR :
      return {
        loading: false,
        error: action.data
      };
    default :
      return preState;
  }
}

export default reducer;