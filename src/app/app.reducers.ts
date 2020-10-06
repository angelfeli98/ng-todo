
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './components/todo.interface';
import { todoReducer } from './components/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}