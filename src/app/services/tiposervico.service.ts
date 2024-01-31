import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoServico } from '../models/TipoServico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposervicoService {

  private readonly API = 'http://localhost:8080/clickdesp/tiposervicos'

  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoServico[]>{
    return this.http.get<TipoServico[]>(this.API);
  }

  create(tipoServico: TipoServico): Observable<TipoServico>{
    return this.http.post<TipoServico>(this.API, tipoServico);
  }

  findById(id: number): Observable<TipoServico> {
    const url = `${this.API}/${id}`
    return this.http.get<TipoServico>(url)
  }

  update(tipoServico: TipoServico): Observable<TipoServico> {
    const url = `${this.API}/${tipoServico.id}`;
    return this.http.put<TipoServico>(url, tipoServico);
  }

  delete(id: number): Observable<TipoServico> {
    const url = `${this.API}/${id}`;
    return this.http.delete<TipoServico>(url);
  }
}
