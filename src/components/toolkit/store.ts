import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosSlice, selectedTodoSlice, counterTodoSlice } from './toolkit';
import logger from 'redux-logger';


const middleware = [...getDefaultMiddleware(),logger];

