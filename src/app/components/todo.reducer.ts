
import { createReducer, on, Action } from '@ngrx/store';
import { addItem, checkItem, deleteCompleted, deleteItem, editItem, toggleAll } from './todo.actions';
import { TodoModel } from '../models/todo.model';
import { state } from '@angular/animations';

const initState: TodoModel[] = [];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(
    initState,
    // tslint:disable-next-line: no-shadowed-variable
    on(addItem, (state, {text}) => [...state, new TodoModel(text)]),
    // tslint:disable-next-line: no-shadowed-variable
    on(checkItem, (state, {id}) => state.map( todo => ({...todo, completed: todo.id === id ? !todo.completed : todo.completed}))),
    on(editItem, (store, {id, textN}) => store.map(todo => ({...todo, text: todo.id === id ? textN : todo.text}))),
    on(deleteItem, (store, {id}) => store.filter(todo => todo.id !== id)),
    on(toggleAll, (store, {completed}) => store.map(todo => ({...todo, completed }))),
    on(deleteCompleted, (store) => store.filter(todo => !todo.completed))
);

// tslint:disable-next-line: no-shadowed-variable
export const todoReducer = (state: TodoModel[], action: Action) => _todoReducer(state, action);



