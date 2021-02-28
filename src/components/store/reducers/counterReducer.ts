import { CREATE_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes';

import { TodoActionTypes } from './todoReducer';

export const counterReducer = (state = 0, action: TodoActionTypes) => {
  switch (action.type) {
    case CREATE_TODO : {
      return state + 1;
    }
    case EDIT_TODO : {
      return state + 1;
    }
    case TOGGLE_TODO : {
      return state + 1;
    }
    case DELETE_TODO : {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}