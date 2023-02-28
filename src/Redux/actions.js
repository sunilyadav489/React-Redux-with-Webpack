//Action type
export const CREATE_TODO = "CREATE_TODO";

//Action creators are the functions that encapsulate the process of creation of an action object. 
//These functions simply return a plain Js object which is an action.
//It promotes writing clean code and helps to achieve reusability.
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text}
});

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";

export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: {text}
})