import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) { }

  listar(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API);
  }

  adicionar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.API, categoria);
  }
}
