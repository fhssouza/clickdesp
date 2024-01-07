import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdemServico } from '../models/OrdemServico';

@Injectable({
  providedIn: 'root'
})
export class OrdemservicoService {

  private readonly API = 'http://localhost:8080/clickdesp/ordens-servicos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(this.API);
  }

  create(ordemServico: OrdemServico): Observable<OrdemServico>{
    return this.http.post<OrdemServico>(this.API, ordemServico);
  }

  findById(id: number): Observable<OrdemServico> {
    const url = `${this.API}/${id}`
    return this.http.get<OrdemServico>(url)
  }

  update(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = `${this.API}/${ordemServico.id}`;
    return this.http.put<OrdemServico>(url, ordemServico);
  }

  delete(id: number): Observable<OrdemServico> {
    const url = `${this.API}/${id}`;
    return this.http.delete<OrdemServico>(url);
  }
}
