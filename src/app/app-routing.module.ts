import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfRoutes } from './autenticacao/cadastro-pf/cadastro.pf-routing.module';
import { LoginRoutes } from './autenticacao/login/login-routing.module';

const routes: Routes = [
  {path : '',
   redirectTo: '/login',
   pathMatch: 'full' },
   ...CadastroPfRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
