import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { MaterialModule } from '../../../material/material.module';
import { DatePipe } from './pipes/date.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    MaterialModule,
    FormsModule

  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent

  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent


  ],
  providers: [],
})
export class ListaTareasModule { }
