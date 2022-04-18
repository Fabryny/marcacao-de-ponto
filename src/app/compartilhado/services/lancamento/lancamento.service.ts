import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from '../http-util/http-util.service';
import { Observable } from 'rxjs';
import { Lancamento } from '../../modelos/lancamento.model';
import { environment as env } from 'src/environments/environment';


@Injectable()
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(
  	private http: HttpClient,
  	private httpUtil: HttpUtilService) { }

  buscarUltimoTipoLancado(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_ULTIMO_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
  	return this.http.post(
  	  	env.baseApiUrl + this.PATH, 
  	  	lancamento,
  	  	this.httpUtil.headers()
  	);
  }

  listarTodosLancamentos(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_TODOS_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }

}










