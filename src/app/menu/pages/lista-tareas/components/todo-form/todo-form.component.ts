import { Component, inject } from '@angular/core';
import { ListaTareasService } from '../../../../../service/lista-tareas.service';
import { ListaStatus, ListaTareas } from '../../interfaces/lista.interfaces';
import { formOptions } from '../../config/options';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls:['./todo-form.component.css']
})

export class TodoFormComponent {
  private listaService = inject(ListaTareasService);

  public newListaDescription: string = ''
  public newListaStatus: {value: ListaStatus, name: string} = formOptions[0];
  public statusOptions = formOptions

  public addLista(){
    const newLista: ListaTareas = {
      id: Math.random(),
      description: this.newListaDescription,
      status: this.newListaStatus.value,
      createdAt: new Date(),

    };

    this.listaService.addLista(newLista);

    this.newListaDescription='';
    this.newListaStatus = formOptions[0];

  }
  public changeStatus(newStatus: {value: ListaStatus, name: string}){
    this.newListaStatus= newStatus;
  }
}
