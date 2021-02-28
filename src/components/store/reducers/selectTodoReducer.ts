import { SelectTodoActionType, SELECTED_TODO } from '../actions/actionTypes';

type SelectedTodoActionTypes = SelectTodoActionType;

export const selectTodoReducer = (state: string | null = null , action : SelectedTodoActionTypes) => {
  switch (action.type) {
    case SELECTED_TODO : {
      return action.payload.id
    }
  }
}

