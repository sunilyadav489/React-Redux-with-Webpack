import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from './TodoListItem.js';

import './todo.css';

const TodoList = ({todos = [{text: 'Configure Webpack'}, {text: 'Setup application' }]}) => {
    // const [todos, setTodos] = useState([])
    return (
        <div className="list-wrapper">
            <h3>Add Todo</h3>
            <NewTodoForm/>
            <br/>
            <h3>Todo List</h3>
            {todos.map( todo => <TodoListItem todo={todo}/>)}
        </div>
    )
}

export default TodoList;