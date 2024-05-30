import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { BanderasPaisesComponent } from './pages/banderas-paises/banderas-paises.component';
import { AplicacionTiempoComponent } from './pages/aplicacion-tiempo/aplicacion-tiempo.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {path:'inicio', component:InicioComponent},
      {path:'lista-tareas', component:ListaTareasComponent},
      {path:'banderas-paises', component:BanderasPaisesComponent,
      children: [
        {
        path: '',
        loadChildren: () => import('./pages/banderas-paises/banderas-paises.module').then(m => m.BanderasPaisesModule),
        }
      ]

      },
      {path:'aplicacion-tiempo', component:AplicacionTiempoComponent},
      {path:'calculadora', component:CalculadoraComponent},
      {path:'**', redirectTo:'inicio'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
