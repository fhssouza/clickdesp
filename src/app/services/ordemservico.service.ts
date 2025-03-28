import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdemServico } from '../models/OrdemServico';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdemservicoService {

  private readonly API = `${environment.API}ordens-servicos`;

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

  cancel(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = `${this.API}/${ordemServico.id}/cancelada`;
    return this.http.put<OrdemServico>(url, ordemServico);
  }

  finish(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = `${this.API}/${ordemServico.id}/finalizada`;
    return this.http.put<OrdemServico>(url, ordemServico);
  }
}
