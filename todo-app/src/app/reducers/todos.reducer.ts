import { createReducer, on } from '@ngrx/store';
import {Todo, State} from '../models/todo';
import * as actionsTodos from '../actions/todo.actions';
import { state } from '@angular/animations';

// export interface State {
//   todos: Todo[];
//   selectedTodo: Todo;
//   filter : string;
// }

export const initialState: State = {
    todos : null,
    selectedTodo : null,
    filter : 'all'
};

export const TodoReducer = createReducer(initialState,
    on(actionsTodos.changeFilter, (state, {filter, todoList})=> ({...state, filter: filter, todos : todoList, selectedTodo : null })),
    on(actionsTodos.selectedTodo, (state, {selectTodo}) => ({...state, selectedTodo : selectTodo})),
    on(actionsTodos.addTodo, (state, {todoList}) => ({...state, todos : todoList, selectedTodo: null})),
    on(actionsTodos.editTodo, (state, {todoList}) => ({...state, todos : todoList, selectedTodo : null})),
    on(actionsTodos.deleteTodo, (state, {todoList}) => ({...state, todos : todoList, selectedTodo : null}))
    );

