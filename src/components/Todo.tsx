import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
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

interface ActiveTodo {
  id: string
}

const Todo = () => {
  const [activeTodo, setActiveTodo] = useState<ActiveTodo>({
    id: ''
  })
  const [newTodoInput, setNewTodoInput] = useState<string>("")
  const [editTodoInput, setEditTodoInput] = useState<string>("")
  const editInputRef = useRef<HTMLInputElement>(null)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const selectedTodo = todos.find(todo => todo.id === activeTodo.id)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
  }

  const handleNewTodoInputChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    const { value } = e.target
    setNewTodoInput(value)
  }

  const handleSelectTodo = (id: string ) : void => {
    setActiveTodo({ id: id })
  }

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setEditTodoInput(e.target.value)
  }

  const handleEdit = ():void => {
    if(!selectedTodo) return;
    setEditTodoInput(selectedTodo.description)
    setIsEditMode(true)
  }

  const handleUpdate = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
  }

  useEffect(() => {
    if(isEditMode) {
      editInputRef?.current?.focus()
    }
  }, [isEditMode])

  const handleCancelUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsEditMode(false);
    setEditTodoInput("")
  }

  return (
    <div className="App">
      <div className="App__counter">Todos Updated Count: 0</div>
      <div className="App__header">
        <h1>Basic Todo App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">Add new:</label>
          <input
            onChange={handleNewTodoInputChange}
            id="new-todo"
            value={newTodoInput}
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div className="App__body">
        <ul className="App__list">
          <h2>My Todos:</h2>
          {
            todos.map((todo, index) => (
              <li 
              key={todo.id} 
              className={`${todo.isCompleted ? 'done' : ''} ${todo.id === activeTodo.id ? 'active' : ''}`} 
              onClick={() => handleSelectTodo(todo.id)}
              >
                <span className="list-number"> {index + 1}</span> {todo.description}
              </li>
            ))
          }
        </ul>
        <div className="App_todo-info">
          <h2>Selected Todo:</h2>
          {selectedTodo === null ? (
            <span className="empty-state">No Todo Selected</span>
          ) : !isEditMode ? (
            <>
              <span
                className={`todo-desc ${
                  selectedTodo?.isCompleted ? "done" : ""
                }`}
              >
                { selectedTodo && selectedTodo.description}
              </span>
              <div className="todo-actions">
                <button onClick={handleEdit}>Edit</button>
                <button>Toggle</button>
                <button>Delete</button>
              </div>
            </>
          ) : (
            <form onSubmit={handleUpdate}>
              <label htmlFor="edit-todo">Edit:</label>
              <input
                ref={editInputRef}
                onChange={handleEditInputChange}
                value={editTodoInput}
              />
              <button type="submit">Update</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo