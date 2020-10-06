
import { createReducer, on, Action } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';
import { selectFilter } from './filter.action';
import { validFilters } from './filter.interface';

const initState: validFilters = 'all';

// tslint:disable-next-line: variable-name
const _filterReducer = createReducer(
    initState,
    on(selectFilter, (state, {filter}) => filter)
);

export const filterReducer = (state: validFilters, action: Action) => _filterReducer(state, action);
