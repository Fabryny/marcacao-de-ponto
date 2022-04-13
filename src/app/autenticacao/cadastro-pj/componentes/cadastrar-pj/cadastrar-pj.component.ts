import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { CadastroPj } from 'src/app/compartilhado/modelos/cadastro-pj.model';
import { CadastroPjService } from 'src/app/compartilhado/services/cadastro-pj/cadastro-pj.service';
import { CnpjValidator } from 'src/app/compartilhado/validadores/cnpj.validator';
import { CpfValidator } from 'src/app/compartilhado/validadores/cpf.validator';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.scss']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
	private cadastrarPjService: CadastroPjService,
  	private fb: FormBuilder, 
  	private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  	this.criarForm();
  }

  criarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
  		senha: ['', [Validators.required, Validators.minLength(6)]],
  		cpf: ['', [Validators.required, CpfValidator ]],
  		razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
  		cnpj: ['', [Validators.required, CnpjValidator]]
  	});
  }

  cadastrarPj() {
	if (this.form.invalid) {
		return;
	}
	const cadastroPj: CadastroPj = this.form.value;
		this.cadastrarPjService.cadastrar(cadastroPj).subscribe( data => {
			console.log(JSON.stringify(data));
			const msg: string = "Realize o login para acessar o sistema.";
			this.snackBar.open(msg, "Sucesso", { duration: 5000 });
			this.router.navigate(['/login']);
		},
		err => {
			console.log(JSON.stringify(err));
			let msg: string = "Tente novamente em instantes.";
			if (err.status == 400) {
			msg = err.error.errors.join(' ');
			}
			this.snackBar.open(msg, "Erro", { duration: 5000 });
		}
		);
	return false;
}

}










