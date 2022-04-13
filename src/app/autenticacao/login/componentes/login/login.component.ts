import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/compartilhado/modelos/login.model';
import { LoginService } from 'src/app/compartilhado/services/login/login.service';
import { Constantes } from 'src/app/compartilhado/utils/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( private router: Router,
               private snackBar: MatSnackBar,
               private fb: FormBuilder,
               private loginService: LoginService) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logar(){
    if (this.form.invalid){
      return;
    }

    const login: Login = this.form.value;

    this.loginService.logar(login).subscribe(value => {

      localStorage['token'] = value['data']['token'];
      const usuarioData = JSON.parse(
        atob(value['data']['token'].split('.')[1])
      ); 

      if(usuarioData['role'] == Constantes.ROLE_ADMIN) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/funcionario']);
      }
    },
    err => {
      console.log(JSON.stringify(err));
      let msg = 'Tente novamente.';
      if( err['status'] == 401 ) {
        msg = "Email ou senha invalido(s).";
      }
      this.snackBar.open(msg, "Erro", { duration: 5000 } );
    }
    );
  }
}
