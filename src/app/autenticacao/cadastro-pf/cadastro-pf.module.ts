import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent } from './componentes/cadastrar-pf/cadastrar-pf.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialImports } from 'src/app/compartilhado/utils/anguiar-material-imports';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';


@NgModule({
  declarations: [CadastrarPfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompartilhadoModule,
    AngularMaterialImports,
    
    RouterModule
  ],
  providers: [
    CadastrarPfComponent
  ]
})
export class CadastroPfModule { }
