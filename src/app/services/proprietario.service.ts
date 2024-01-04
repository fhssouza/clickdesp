import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proprietario } from '../models/Proprietario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  private readonly API = 'http://localhost:8080/clickdesp/proprietarios';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Proprietario[]>{
    return this.http.get<Proprietario[]>(this.API);
  }

  create(proprietario: Proprietario): Observable<Proprietario>{
    return this.http.post<Proprietario>(this.API, proprietario);
  }

  findById(id: number): Observable<Proprietario> {
    const url = `${this.API}/${id}`
    return this.http.get<Proprietario>(url)
  }

  update(servico: Proprietario): Observable<Proprietario> {
    const url = `${this.API}/${servico.id}`;
    return this.http.put<Proprietario>(url, servico);
  }

  delete(id: number): Observable<Proprietario> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Proprietario>(url);
  }
}
