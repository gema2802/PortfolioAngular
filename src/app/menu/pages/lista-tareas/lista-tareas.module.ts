import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { MaterialModule } from '../../../material/material.module';
import { DatePipe } from './pipes/date.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ArrowComponent } from './components/dropdown/components/arrow.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoOrdersComponent } from './components/todo-orders/todo-orders.component';

@NgModule({
  imports: [CommonModule,
    MaterialModule,
    FormsModule

  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent,
    DropdownComponent,
    ArrowComponent,
    TodoFilterComponent,
    TodoOrdersComponent


  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent,
    DropdownComponent,
    ArrowComponent,
    TodoFilterComponent,
    TodoOrdersComponent


  ],
  providers: [],
})
export class ListaTareasModule { }
