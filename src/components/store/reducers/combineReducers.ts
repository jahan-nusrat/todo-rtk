//import { applyMiddleware, combineReducers, createStore } from 'redux'
import { selectTodoReducer } from './selectTodoReducer'
import { todosReducer } from './todoReducer'
import { counterReducer } from './counterReducer';
//import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

/* const reducers = combineReducers({
  todos: todosReducer,
  selectedTodo: selectTodoReducer,
  counter: counterReducer
}) */

/* const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
); */
//export default store