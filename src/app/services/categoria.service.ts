import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from './../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = 'http://localhost:8080/clickdesp/categorias'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API);
  }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.API, categoria);
  }

  findById(id: number): Observable<Categoria> {
    const url = `${this.API}/${id}`
    return this.http.get<Categoria>(url)
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.API}/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria);
  }

  delete(id: number): Observable<Categoria> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Categoria>(url);
  }

}
