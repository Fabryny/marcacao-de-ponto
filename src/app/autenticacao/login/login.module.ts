import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { LogarComponent } from './componentes/logar.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialImports } from 'src/app/compartilhado/utils/anguiar-material-imports';
import { LoginService } from 'src/app/compartilhado/services/login/login.service';


@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialImports
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
