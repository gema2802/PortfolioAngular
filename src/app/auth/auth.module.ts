import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
