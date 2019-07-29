import { createAction, props } from '@ngrx/store';
import {Todo} from '../models/todo';

export const changeFilter = createAction('[Todo] Change filter', props<{filter : string, todoList : Todo[]}>());
export const addTodo = createAction('[Todo] Add todo', props<{todoList : Todo[]}>());
export const editTodo = createAction('[Todo] Edit todo', props<{todoList : Todo[]}>());
export const selectedTodo = createAction('[Todo] Select todo', props<{selectTodo: Todo}>());
export const deleteTodo = createAction('[Todo] Delete todo', props<{todoList : Todo[]}>()); 

