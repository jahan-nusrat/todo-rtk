import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../../type'
import { v1 as uuid} from 'uuid'

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

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<{id: string, description: string; isCompleted: boolean }>) => {
        state.push(payload);
      },
      prepare: ({ description } : { description: string }) => ({
        payload: {
          id: uuid(),
          description,
          isCompleted: false,
        }
      })
    },
    edit: (state, action: PayloadAction<{id: string; description: string }>) => {
      const {payload} = action;
      const todoToEdit = state.find(todo => todo.id === payload.id);
      if(todoToEdit){
        todoToEdit.description = payload.description;
      }
    },
    toggle: (state, { payload }: PayloadAction<{id: string, isCompleted: boolean }>) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if(index !== -1) {
        state[index].isCompleted = payload.isCompleted;
      }
    },
    delete: (state, { payload }: PayloadAction<{id: string}>) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if(index !== -1) {
        state.splice(index, 1);
      }
    }
  }
})

const selectedTodoSlice = createSlice({
  name:'selectedTodo',
  initialState: null as string | null,
  reducers: {
    selected: (state, { payload }: PayloadAction<{id: string}>) => payload.id
  }
})

const counterTodoSlice = createSlice({
  name:'counter',
  initialState: 0,
  reducers: {},
  extraReducers : {
    [todosSlice.actions.create.type] : state => state + 1,
    [todosSlice.actions.edit.type] : state => state + 1,
    [todosSlice.actions.toggle.type] : state => state + 1,
    [todosSlice.actions.delete.type] : state => state + 1
  },
})