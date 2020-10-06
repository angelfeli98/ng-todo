import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addItem } from '../todo.actions';
import { AppState } from '../todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public form: FormControl;

  constructor(
    private store: Store<AppState>
  ){
    this.form = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  public addTodo = (): void => {
    if(this.form.valid){
      this.store.dispatch(addItem({text: this.form.value}));
    }
    this.form.setValue('');
  }

}
