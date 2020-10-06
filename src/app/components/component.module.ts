
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page.component';

import { StoreModule } from '@ngrx/store';

import { todoReducer } from './todo.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appReducers } from '../app.reducers';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
    declarations: [
        FooterTodoComponent,
        TodoItemComponent,
        TodoAddComponent,
        TodoListComponent,
        TodoPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forRoot(appReducers),
        ReactiveFormsModule,
        PipeModule
    ],
    exports: [
        SharedModule,
        TodoPageComponent,
        StoreModule
    ]
})
export class ComponentModule{}
