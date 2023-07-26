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

  buscarPorId(id: number): Observable<Categoria> {
    const url = `${this.API}/${id}`
    return this.http.get<Categoria>(url)
  }

  editar(categoria: Categoria): Observable<Categoria> {
    const url = `${this.API}/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria);
  }

  excluir(id: number): Observable<Categoria> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Categoria>(url);
  }

}
