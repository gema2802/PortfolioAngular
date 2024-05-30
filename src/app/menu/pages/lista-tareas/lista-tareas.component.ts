import { Component, inject } from '@angular/core';
import { ListaTareas } from './interfaces/lista.interfaces';
import { ListaTareasService } from '../../../service/lista-tareas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})

export class ListaTareasComponent {
  public lista?: ListaTareas[]
  private listaService = inject(ListaTareasService)
  private listaSubscription: Subscription

  constructor(){
    this.listaSubscription = this.listaService.getLista().subscribe(lista=> {
      this.lista= lista;
    });
  }


ngDestroy(){
  this.listaSubscription.unsubscribe()
}
}
