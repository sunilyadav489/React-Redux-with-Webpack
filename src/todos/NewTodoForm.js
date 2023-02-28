import React, {useState} from 'react'
import './todo.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='new-todo-form'>
        <input 
            type='text'
            className='new-todo-input'
            placeholder='Type your new todo here'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
        <button className='new-todo-button'>Create Todo</button>
    </div>
  )
}

export default NewTodoForm;