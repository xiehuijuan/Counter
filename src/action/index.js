import { INCREMENT, DECREMENT } from './../actionTypes';

export const increment = count => {
  return { type: INCREMENT, count }
};

export const decrement = count => {
  return { type: DECREMENT, count }
};
