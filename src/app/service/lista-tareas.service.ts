
import { Injectable } from '@angular/core';
import { FilterStatus, ListaStatus, ListaTareas, Orders } from '../menu/pages/lista-tareas/interfaces/lista.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ListaTareasService {
  private lista: ListaTareas[]= [];
  private listaSubject = new BehaviorSubject<ListaTareas[]>(this.lista);
  public filterSubject = new BehaviorSubject<FilterStatus>('all');

  constructor(){
    this.loadFromLocalStorage();
    this.setupFiltering()
  }

  public getLista():Observable <ListaTareas[]>{
    return this.listaSubject.asObservable();
  }

  private setupFiltering() {
    this.filterSubject.subscribe((status) => {
      const filteredLista =
      status === 'all'
      ? this.lista
      : this.lista.filter((lista) => lista.status === status);

      this.listaSubject.next(filteredLista)
    })
  }

  public filterByStatus (status: FilterStatus){
    this.filterSubject.next(status)
    return this.listaSubject.asObservable();
  }

  public orderByDate(order: Orders) {
    this.lista.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
    this.update();
  }

  public addLista (newLista: ListaTareas){
    this.lista.push(newLista);
    this.update()
  }

  public removeLista(listaId: ListaTareas['id']){
    this.lista = this.lista.filter(lista => lista.id !== listaId);
    this.update()
  }


  public chaangeListaStatus (listaId: ListaTareas['id'], newStatus: ListaStatus){
    const listaIndex = this.lista.findIndex(lista => lista.id === listaId)

    if(listaIndex === -1) return

    this.lista[listaIndex].status = newStatus;

    this.update();
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
