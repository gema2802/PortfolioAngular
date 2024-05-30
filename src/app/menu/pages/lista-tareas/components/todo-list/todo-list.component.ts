import { Component, Input} from '@angular/core';
import { ListaTareas } from '../../interfaces/lista.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl:'./todo-list.component.css'
})

export class TodoListComponent  {

@Input() todoList?: ListaTareas[] | null;

}
