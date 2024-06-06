import { Component, inject } from '@angular/core';
import { ListaTareasService } from '../../../../../service/lista-tareas.service';
import { Orders } from '../../interfaces/lista.interfaces';
import { orderOptions } from '../../config/options';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
})
export class TodoOrdersComponent {
  private listaService = inject(ListaTareasService);

  public selectedOrder: { value: Orders; name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(selectedOrder: { value: Orders; name: string }) {
    this.selectedOrder = selectedOrder;
    this.listaService.orderByDate(selectedOrder.value);
  }
}
