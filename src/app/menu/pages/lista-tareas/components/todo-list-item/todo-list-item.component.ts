import { Component, Input, inject } from '@angular/core';
import { ListaStatus, ListaTareas } from '../../interfaces/lista.interfaces';
import { ListaTareasService } from '../../../../../service/lista-tareas.service';
import { formOptions } from '../../config/options';
import { traductions } from '../../utils/traductions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})

export class TodoListItemComponent {
@Input() lista?: ListaTareas;

private listaService = inject (ListaTareasService)
public statusOptions = formOptions;


get optionSelected (){
  return { value: this.lista?.status, name: traductions[this.lista?.status!]};
}

public removeLista(){
  if(!this.lista) return
  this.listaService.removeLista(this.lista.id)
}

public changeStatus(newStatus: {value: ListaStatus; name: string}){
  if(this.lista?.id){
    this.listaService.chaangeListaStatus(this.lista.id, newStatus.value);
  }

}
}
