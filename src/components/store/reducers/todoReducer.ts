import { ToDo } from '../../../type';
import { v1 as uuid} from 'uuid'
import { CreateTodoActionType, EditTodoActionType, ToggleTodoActionType, DeleteTodoActionType, CREATE_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes';

export type TodoActionTypes = 
CreateTodoActionType | 
EditTodoActionType | 
ToggleTodoActionType | 
DeleteTodoActionType;

const todosInitialState: ToDo[] = [
  {
    id: uuid(),
    description: 'Learning TypeScript',
    isCompleted: false,
  },
  {
    id: uuid(),
    description: 'Learning Redux Toolkit',
    isCompleted: false,
  },
  {
    id: uuid(),
    description: 'Learning Styled-Components',
    isCompleted: true,
  },
]

export const todosReducer = ( state: ToDo[] = todosInitialState, action: TodoActionTypes) => {
  switch(action.type) {
    case CREATE_TODO: {
      return [...state, action.payload];
    }
    case EDIT_TODO : {
      return state.map(todo => todo.id === action.payload.id ? {...todo, description:action.payload.description} : todo);
    }
    case TOGGLE_TODO : {
      return state.map(todo => todo.id === action.payload.id ? {...todo, isCompleted: action.payload.isCompleted} : todo)
    }
    case DELETE_TODO : {
      return state.filter(todo => todo.id !== action.payload.id)
    }
    default: 
      return state;
  }
}