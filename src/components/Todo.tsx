import React from "react"
import { ToDo } from '../type';
import { v1 as uuid} from 'uuid';
import './App.css'

const todos: ToDo[] = [
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

const Todo = () => {
  console.log(todos)
  return (
    <div className="App">
      <div className="App__counter">Todos Updated Count: 0</div>
      <div className="App__header">
        <h1>Basic Todo App</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="new-todo">Add new:</label>
          <input
            type="text"
            id="new-todo"
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div className="App__body">
        <ul className="App__list">
          <h2>My Todos:</h2>
            <li>
              <span className="list-number">1</span> Learning
            </li>
        </ul>
        <div className="App_todo-info">
          <h2>Selected Todo:</h2>
            <span className="empty-state">No Todo Selected</span>
            <>
              <span>
                Learning react
              </span>
              <div className="todo-actions">
                <button>Edit</button>
                <button>Toggle</button>
                <button>Delete</button>
              </div>
            </>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="edit-todo">Edit:</label>
              <input type="text"/>
              <button type="submit">Update</button>
              <button>Cancel</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Todo
