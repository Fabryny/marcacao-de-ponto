import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './autenticacao/login/login.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/cadastro-pj-routing.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/cadastro.pf-routing.module';
import { FuncionarioRoutingModule } from './funcionario/funcionareio-routing.module';
import { AngularMaterialImports } from './compartilhado/utils/anguiar-material-imports';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialImports,
    
    LoginModule,
    CadastroPjModule,
    CadastroPfModule,
    FuncionarioModule,
    
    LoginRoutingModule,
    CadastroPjRoutingModule,
    CadastroPfRoutingModule,
    FuncionarioRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
