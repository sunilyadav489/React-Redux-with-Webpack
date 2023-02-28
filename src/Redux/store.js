import {createStore, combineReducers} from 'redux';
import { todosReducer } from './reducers';

const reducers = {
    todos:todosReducer
};

//createStore Creates a Redux store that holds the complete state tree of your app
// You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer.
//The root reducer is then passed into the Redux createStore() method. In order to let us combine multiple reducers together, Redux provides the combineReducers() method.
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);