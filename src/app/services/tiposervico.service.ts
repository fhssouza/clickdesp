import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoServico } from '../models/TipoServico';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposervicoService {
  private readonly API = 'http://localhost:8080/clickdesp/tiposervicos';

  constructor(private http: HttpClient) {}

  findAll(): Observable<TipoServico[]> {
    return this.http.get<TipoServico[]>(this.API);
  }

  create(tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.post<TipoServico>(this.API, tipoServico);
  }

  findById(id: number): Observable<TipoServico> {
    const url = `${this.API}/${id}`;
    return this.http.get<TipoServico>(url);
  }

  update(tipoServico: TipoServico): Observable<TipoServico> {
    const url = `${this.API}/${tipoServico.id}`;
    return this.http.put<TipoServico>(url, tipoServico);
  }

  delete(id: number): Observable<TipoServico> {
    const url = `${this.API}/${id}`;
    return this.http.delete<TipoServico>(url);
  }

  getTipoServicoIdByDescricao(descricao: string): Observable<number> {
    const url = `${this.API}?descricao=${descricao}`;
    return this.http.get<TipoServico[]>(url).pipe(
      map((tipos) => {
        if (tipos && tipos.length > 0) {
          return tipos[0].id;
        } else {
          throw new Error('Veículo não encontrado');
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter ID do veículo:', error);
        throw error;
      })
    );
  }
}
