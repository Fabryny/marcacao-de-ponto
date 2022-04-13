import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPf } from 'src/app/compartilhado/modelos/cadastro-pf.model';
import { CadastroPfService } from 'src/app/compartilhado/services/cadastr-pf/cadastro-pf.service';
import { CnpjValidator } from 'src/app/compartilhado/validadores/cnpj.validator';
import { CpfValidator } from 'src/app/compartilhado/validadores/cpf.validator';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.scss']
})
export class CadastrarPfComponent implements OnInit {
  
  form: FormGroup;

  constructor(
    private cadastrarPfService: CadastroPfService,
  	private fb: FormBuilder, 
  	private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
  		senha: ['', [Validators.required, Validators.minLength(6)]],
  		cpf: ['', [Validators.required, CpfValidator]],
  		cnpj: ['', [Validators.required, CnpjValidator]]
  	});
  }

  cadastrarPf() {
  	if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        err => {
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