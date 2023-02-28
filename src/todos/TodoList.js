import React, {useState} from "react";
import {connect} from "react-redux";

import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from './TodoListItem.js';
import { removeTodo, markTodoAsCompleted} from "../Redux/actions.js";

import './todo.css';

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed}) => {
    return (
        <div className="list-wrapper">
            <h3>Add Todo</h3>
            <NewTodoForm />
            <br/>
            {todos.length ? <h3>Todo List</h3>: null}
            {todos.map( todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);