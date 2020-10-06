import { TodoModel } from '../models/todo.model';
import { validFilters } from '../filter/filter.interface';

export interface AppState{
    todos: TodoModel[];
    filter: validFilters;
}