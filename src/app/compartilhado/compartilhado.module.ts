import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './diretivas/mascara.directive';
import { CpfValidator } from './validadores/cpf.validator';



@NgModule({
  declarations: [
    MascaraDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
  ]
})
export class CompartilhadoModule { }
