import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarPfComponent } from "./componentes/cadastrar-pf/cadastrar-pf.component";

export const CadastroPfRoutes: Routes = [
	{
		path: 'cadastro-pf',
		component: CadastrarPfComponent,
		children: [
		  {
			path: '', 
			component: CadastrarPfComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroPfRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPfRoutingModule {
}


