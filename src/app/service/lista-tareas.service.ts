
import { Injectable } from '@angular/core';
import { ListaTareas } from '../menu/pages/lista-tareas/interfaces/lista.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

const tareasdePrueba: ListaTareas[] = [
  {
    id:1,
    description: 'Tarea 1',
    createdAt: new Date(),
    status: 'empty'

  },
  {
    id:2,
    description: 'Tarea 2',
    createdAt: new Date(),
    status: 'empty'

  },
  {
    id:3,
    description: 'Tarea 3',
    createdAt: new Date(),
    status: 'empty'

  },

]

@Injectable({providedIn: 'root'})
export class ListaTareasService {
  private lista: ListaTareas[]= tareasdePrueba;
  private listaSubject = new BehaviorSubject<ListaTareas[]>(this.lista);

  constructor(){
    this.loadFromLocalStorage()
  }

  public addLista (newLista: ListaTareas){
    this.lista.push(newLista);
    this.update()
  }

  public removeLista(listaId: ListaTareas['id']){
    this.lista = this.lista.filter(lista => lista.id !== listaId);
    this.update()
  }

  public getLista():Observable <ListaTareas[]>{
    return this.listaSubject.asObservable();
  }

  private loadFromLocalStorage(){
    const storedLista = localStorage.getItem('lista');
    if(storedLista){
      this.lista = JSON.parse(storedLista);
    }
  }

  private update(){
    this.listaSubject.next(this.lista);
    this.updateLocalStorage()
  }

  private updateLocalStorage(){
    localStorage.setItem('lista', JSON.stringify(this.lista))
  }
}
