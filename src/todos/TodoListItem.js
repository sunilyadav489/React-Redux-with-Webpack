import React from 'react';

import './todo.css';

const TodoListItem = ({todo}) => {
    return (
        <div className='todo-item-container'>
            <h4>{todo.text}</h4>
            <div className='buttons-container'>
                <button className='completed-button'>Mark as Completed</button>
                <button className='remove-button'>Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem;