import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BanderasPaisesComponent } from './banderas-paises.component';
import { RouterModule } from '@angular/router';
import { BanderasPaisesRoutingModule } from './banderas-paises-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
BanderasPaisesComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    BanderasPaisesRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports:[
 BanderasPaisesComponent
  ]
})
export class BanderasPaisesModule { }
