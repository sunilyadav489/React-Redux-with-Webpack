import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED} from "./actions";
//Reducers are basically pure JS functions which take in
//the current state and an action and return the newly updated state.

export const todosReducer = (state=[], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload;
            const newTodos = {
                text,
                isCompleted: false
            }
            return state.concat(newTodos)
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todo => todo.text !== text)
        }
        case MARK_TODO_AS_COMPLETED: {
            const {text} = payload;
            return state.map(todo => {
                if(todo.text === text) {
                    return {...todo, isCompleted:true}
                }
                return todo
            })
        }
        default: 
            return state
    }
}