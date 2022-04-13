import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { LancamentoComponent } from './componentes/lancamento/lancamento.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioComponent } from './funcionario.component';
import { AngularMaterialImports } from '../compartilhado/utils/anguiar-material-imports';



@NgModule({
  declarations: [
    ListagemComponent, 
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialImports,
    
    RouterModule
  ],
})
export class FuncionarioModule { }
