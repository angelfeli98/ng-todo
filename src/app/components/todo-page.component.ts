import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from './todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {

  public completed: boolean;

  constructor(
    private store: Store
  ){
    this.completed = false;
  }

  ngOnInit(): void {
  }

  public toggleAll = (): void => {
    this.completed = !!!this.completed;
    this.store.dispatch(toggleAll({completed: this.completed}));
  }
}
