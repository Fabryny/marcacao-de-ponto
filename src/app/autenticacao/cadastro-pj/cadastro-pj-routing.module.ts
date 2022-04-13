import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarPjComponent } from './componentes/cadastrar-pj/cadastrar-pj.component';
import { CadastroPjComponent } from './componentes/cadastro-pj.component';

export const CadastroPjModule: Routes = [
  {path : 'cadastro-pj',
   component: CadastroPjComponent,
   children: [{path: '', component: CadastrarPjComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(CadastroPjModule)],
  exports: [RouterModule]
})
export class CadastroPjRoutingModule {
}

