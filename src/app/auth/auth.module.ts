import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, ForgetComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
