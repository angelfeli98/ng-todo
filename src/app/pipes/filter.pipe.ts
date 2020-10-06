
import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { validFilters } from '../filter/filter.interface';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{

    transform(todos: TodoModel[], filter: validFilters): TodoModel[] {
        return filter === 'all' ? todos :
                filter === 'completed' ? todos.filter(todo => todo.completed)
                                    : todos.filter(todo => !todo.completed);
    }
}