import {INCREMENT, DECREMENT} from '../config';
//增加
export const increment = data => ({type: INCREMENT, data});
//减少
export const decrement = data => ({type: DECREMENT, data});