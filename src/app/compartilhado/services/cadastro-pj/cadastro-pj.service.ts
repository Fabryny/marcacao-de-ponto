import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CadastroPj } from '../../modelos/cadastro-pj.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }
  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPj)
  }
}
