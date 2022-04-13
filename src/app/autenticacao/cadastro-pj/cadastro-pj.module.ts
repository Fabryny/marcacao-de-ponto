import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './componentes/cadastrar-pj/cadastrar-pj.component';
import { RouterModule } from '@angular/router';
import { CadastroPjComponent } from './componentes/cadastro-pj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialImports } from 'src/app/compartilhado/utils/anguiar-material-imports';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';
import { CadastroPjService } from 'src/app/compartilhado/services/cadastro-pj/cadastro-pj.service';



@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompartilhadoModule,
    AngularMaterialImports,
    
    RouterModule
  ],
  providers: [
    CadastroPjService
  ]
})
export class CadastroPjModule { }
