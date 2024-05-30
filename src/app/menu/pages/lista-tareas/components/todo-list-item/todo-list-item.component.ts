import { Component, Input, inject } from '@angular/core';
import { ListaTareas } from '../../interfaces/lista.interfaces';
import { ListaTareasService } from '../../../../../service/lista-tareas.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})

export class TodoListItemComponent {
@Input() lista?: ListaTareas;

private listaService = inject (ListaTareasService)

public removeLista(){
  if(!this.lista) return
  this.listaService.removeLista(this.lista.id)
}
}
