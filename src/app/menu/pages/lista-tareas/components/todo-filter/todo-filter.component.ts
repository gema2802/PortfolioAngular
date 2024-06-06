import { ListaTareasService } from './../../../../../service/lista-tareas.service';
import { filterOptions } from './../../config/options';
import { Component, inject} from '@angular/core';
import { FilterStatus } from '../../interfaces/lista.interfaces';
import { traductions } from '../../utils/traductions';

@Component({
  selector: 'app-todo-filter',
  templateUrl: 'todo-filter.component.html',
  styleUrls:['todo-filter.component.css']
})

export class TodoFilterComponent {
public selectedStatus: {name: string; value: FilterStatus}=
 filterOptions[0];

 private ListaTareasService = inject (ListaTareasService)
 public filterOptions =filterOptions;


 constructor() {
  this.ListaTareasService.filterSubject.pipe().subscribe((filter) => {
    this.selectedStatus = { name: traductions[filter], value: filter };
  });
}

public filterByStatus(selectedStatus: { name: string; value: FilterStatus }) {
  this.ListaTareasService.filterByStatus(selectedStatus.value);
}
}
