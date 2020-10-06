import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../models/todo.model';
import { AppState } from '../todo.interface';
import { validFilters } from '../../filter/filter.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: TodoModel[];
  public currentFilter: validFilters;

  constructor(
    private store: Store<AppState>
  ){
    // tslint:disable-next-line: no-shadowed-variable
    this.store.subscribe(store => {
      this.currentFilter = store.filter;
      this.todos = store.todos;
    })
  }

  ngOnInit(): void {
  }

}
