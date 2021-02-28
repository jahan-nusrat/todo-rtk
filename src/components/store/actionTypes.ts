import { v1 as uuid } from 'uuid'
import { ToDo } from "../../type";

//Constants
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SELECTED_TODO = 'SELECTED_TODO';

/* Actions & Actions types */

//Create todo
export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: ToDo
}

export const createTodoActionCreator = ({ description }: {
  description: string
}) : CreateTodoActionType => {
  return { 
    type: CREATE_TODO,
    payload : {
      id: uuid(),
      description,
      isCompleted: false
    }
  }
}

//Edit todo
export interface EditTodoActionType {
  type: typeof EDIT_TODO;
  payload : {
    id: string,
    description: string
  }
}

export const editTodoActionCreator = ({ id, description } : {
  id: string; description: string
}) : EditTodoActionType => {
  return {
    type: EDIT_TODO,
    payload: { id, description }
  }
}

//Toggle todo
export interface ToggleTodoActionType {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
    isCompleted: boolean;
  };
}

export const toggleTodoActionCreator = ({ id, isCompleted } : {
  id: string ; isCompleted: boolean
}): ToggleTodoActionType => {
  return {
    type: TOGGLE_TODO,
    payload: { id, isCompleted }
  }
}

//Delete todo
export interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: { id: string }
}

export const deleteTodoActionCreator = ({id} : {
  id: string
}) : DeleteTodoActionType => {
  return {
    type: DELETE_TODO,
    payload: { id }
  }
}

//Selected todo
export interface SelectTodoActionType {
  type: typeof SELECTED_TODO;
  payload: { id: string }
}

export const selectTodoActionCreator = ({id} : {
  id: string
}) : SelectTodoActionType => {
  return {
    type: SELECTED_TODO,
    payload: { id }
  }
}