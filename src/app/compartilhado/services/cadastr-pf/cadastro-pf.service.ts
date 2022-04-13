import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CadastroPf } from '../../modelos/cadastro-pf.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPf)
  }

}
