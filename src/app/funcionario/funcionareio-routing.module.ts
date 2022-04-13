import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoComponent } from './componentes/lancamento/lancamento.component';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { FuncionarioComponent } from './funcionario.component';

export const FuncionarioRoutes: Routes = [
    {   path : 'funcionario',
        component: FuncionarioComponent,
        children: [
            {
                path: '',
                component: LancamentoComponent
            },
            {
                path:'listagem',
                component: ListagemComponent
            }
        ] 
    },
];

@NgModule({
  imports: [RouterModule.forChild(FuncionarioRoutes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
