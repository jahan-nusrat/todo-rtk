import { combineReducers, createStore } from 'redux'
import { selectTodoReducer } from './selectTodoReducer'
import { todosReducer } from './todoReducer'
import { counterReducer } from './counterReducer';

const reducers = combineReducers({
  todos: todosReducer,
  selectedTodo: selectTodoReducer,
  counter: counterReducer
})

export default createStore(reducers)