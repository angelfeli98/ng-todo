import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../todo.interface';
import { validFilters } from '../../filter/filter.interface';
import { selectFilter } from 'src/app/filter/filter.action';
import { TodoModel } from '../../models/todo.model';
import { filter } from 'rxjs/operators';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-footer-todo',
  templateUrl: './footer-todo.component.html',
  styleUrls: ['./footer-todo.component.css']
})
export class FooterTodoComponent implements OnInit {

  public currentFilter: validFilters;
  public filters: validFilters[];
  public pendingTodo: number;

  constructor(
    private sotre: Store<AppState>
  ){
    this.filters = ['all', 'completed', 'pending'];
    // tslint:disable-next-line: no-shadowed-variable
    this.sotre.subscribe( ({filter, todos}) => {
      this.currentFilter = filter;
      this.pendingTodo = todos.filter(todo => !todo.completed).length;
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: no-shadowed-variable
  public changeFilter = (filter: validFilters): void =>
          this.sotre.dispatch(selectFilter({filter}))

  public deleteCompleted = (): void =>
          this.sotre.dispatch(deleteCompleted())

}
