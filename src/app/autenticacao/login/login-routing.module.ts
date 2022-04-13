import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarComponent } from './componentes/logar.component';

export const LoginRoutes: Routes = [
  {path : 'login',
   component: LogarComponent,
   children: [{path: '', component: LogarComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

