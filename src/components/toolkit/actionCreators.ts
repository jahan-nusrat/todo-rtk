const CREATE_TODO = 'CREATE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECTED_TODO = 'SELECTED_TODO';
import { v1 as uuid } from 'uuid'
import { ToDo } from '../../type';
import { todosSlice } from './toolkit';

interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: ToDo
}

const createActionCreator = ({ description }: {
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
interface EditTodoActionType {
  type: typeof EDIT_TODO;
  payload : {
    id: string,
    description: string
  }
}

const editActionCreator = ({ id, description } : {
  id: string; description: string
}) : EditTodoActionType => {
  return {
    type: EDIT_TODO,
    payload: { id, description }
  }
}

//Toggle todo
interface ToggleTodoActionType {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
    isCompleted: boolean;
  };
}

const toggleActionCreator = ({ id, isCompleted } : {
  id: string ; isCompleted: boolean
}): ToggleTodoActionType => {
  return {
    type: TOGGLE_TODO,
    payload: { id, isCompleted }
  }
}

//Delete todo
interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: { id: string }
}

const deleteActionCreator = ({id} : {
  id: string
}) : DeleteTodoActionType => {
  return {
    type: DELETE_TODO,
    payload: { id }
  }
}

//Selected todo
interface SelectTodoActionType {
  type: typeof SELECTED_TODO;
  payload: { id: string }
}

const selectActionCreator = ({id} : {
  id: string
}) : SelectTodoActionType => {
  return {
    type: SELECTED_TODO,
    payload: { id }
  }
}

export const {
  create: createActionCreator,
  edit: editTodoActionCreator,
  delete: deleteTodoActionCreator,
  toggle: toggleTodoActionCreator
} = todosSlice.actions