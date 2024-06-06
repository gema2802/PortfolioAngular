import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { AplicacionTiempoComponent } from './pages/aplicacion-tiempo/aplicacion-tiempo.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HistorialComponent } from './pages/calculadora/historial/historial.component';
import { MaterialModule } from '../material/material.module';
import { BanderasPaisesModule } from './pages/banderas-paises/banderas-paises.module';
import { ListaTareasModule } from './pages/lista-tareas/lista-tareas.module';


@NgModule({
  declarations: [
    CalculadoraComponent,
    InicioComponent,
    ListaTareasComponent,
    AplicacionTiempoComponent,
    LayoutPageComponent,
    HistorialComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    BanderasPaisesModule,
    ListaTareasModule,
  ]
})
export class MenuModule { }
