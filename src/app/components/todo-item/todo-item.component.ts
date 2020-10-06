import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../todo.interface';
import { checkItem, deleteItem, editItem } from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @ViewChild('text') textInput: ElementRef;
  public completed: FormControl;
  public description: FormControl;
  public editing: boolean;

  constructor(
    private store: Store<AppState>
  ){
    this.editing = false;
  }

  ngOnInit(): void {
    this.completed = new FormControl(this.todo.completed);
    this.description = new FormControl(this.todo.text, Validators.required);
    this.addLiteners();
  }

  public startEditing = (): void => {
    this.editing = true;
    setTimeout((): void => this.textInput.nativeElement.select(), 1);
  }

  public deleteFocus = (): void => {
    if (this.description.valid && this.todo.text !== this.description.value){
      this.store.dispatch(editItem({id: this.todo.id, textN: this.description.value}));
    }
    this.editing = false;
    this.description.setValue(this.todo.text);
  }

  private addLiteners = (): void => {
    this.completed.valueChanges.subscribe( value => this.store.dispatch(checkItem({id: this.todo.id})));
  }

  public delete = (): void => {
    this.store.dispatch(deleteItem({id: this.todo.id}));
  }

}
