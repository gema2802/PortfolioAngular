import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url:'./inicio'},
    { label: 'Lista de Tareas', icon: 'view_list', url:'./lista-tareas'},
    { label: 'Banderas Paises', icon: 'flag', url:'./banderas-paises'},
    { label: 'Aplicacion Tiempo', icon: 'thermostat', url:'./aplicacion-tiempo'},
    { label: 'Calculadora', icon: 'calculate', url:'./calculadora'},


  ]

}
