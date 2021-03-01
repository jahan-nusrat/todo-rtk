import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { State } from '../type';
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { 
  createTodoActionCreator, 
  editTodoActionCreator, 
  toggleTodoActionCreator, 
  deleteTodoActionCreator, 
  selectTodoActionCreator
} from './store/actions/actionTypes'

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos);
  const selectedTodoId = useSelector((state: State) => state.selectedTodo);
  const editCount = useSelector((state: State) => state.counter)

  const [newTodoInput, setNewTodoInput] = useState<string>("")
  const [editTodoInput, setEditTodoInput] = useState<string>("")
  const editInputRef = useRef<HTMLInputElement>(null)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const selectedTodo = selectedTodoId && todos.find(todo => todo.id === selectedTodoId) || null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    if(!newTodoInput.length) return;
    dispatch(createTodoActionCreator({description: newTodoInput}));
    setNewTodoInput("")
  }

  const handleNewTodoInputChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    const { value } = e.target
    setNewTodoInput(value)
  }

  const handleSelectTodo = (id: string ) : void => {
    dispatch(selectTodoActionCreator({id}))
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
    if(!editTodoInput.length || !selectedTodoId) {
      handleCancelUpdate()
      return;
    }
    dispatch(editTodoActionCreator({ id: selectedTodoId, description: editTodoInput }));
    setIsEditMode(false);
    setEditTodoInput('')
  }

  const handleToggle = (): void => {
    if(!selectedTodoId || !selectedTodo) return;
    dispatch(toggleTodoActionCreator({ id: selectedTodoId, isCompleted: !selectedTodo.isCompleted}))
  }

  useEffect(() => {
    if(isEditMode) {
      editInputRef?.current?.focus()
    }
  }, [isEditMode])

  const handleCancelUpdate = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault();
    setIsEditMode(false);
    setEditTodoInput("")
  }

  const handleDelete = () : void => {
    if(!selectedTodoId) return;
    dispatch(deleteTodoActionCreator({ id: selectedTodoId }))
  }

  return (
    <div className="App">
      <div className="App__counter">Todos Updated Count: {editCount}</div>
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
              className={`${todo.isCompleted ? 'done' : ''} ${todo.id === selectedTodoId ? 'active' : ''}`} 
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
                <button onClick={handleToggle}>Toggle</button>
                <button onClick={handleDelete}>Delete</button>
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
              <button type="submit" onClick={() =>handleUpdate}>Update</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo