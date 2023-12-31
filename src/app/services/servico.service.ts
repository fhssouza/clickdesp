import { Servico } from './../models/Servico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly API = 'http://localhost:8080/clickdesp/servicos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Servico[]>{
    return this.http.get<Servico[]>(this.API);
  }

  create(servico: Servico): Observable<Servico>{
    return this.http.post<Servico>(this.API, servico);
  }

  buscarPorId(id: number): Observable<Servico> {
    const url = `${this.API}/${id}`
    return this.http.get<Servico>(url)
  }

  editar(servico: Servico): Observable<Servico> {
    const url = `${this.API}/${servico.id}`;
    return this.http.put<Servico>(url, servico);
  }

  excluir(id: number): Observable<Servico> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Servico>(url);
  }

}
