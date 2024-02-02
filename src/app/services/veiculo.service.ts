import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Veiculo } from '../models/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = 'http://localhost:8080/clickdesp/veiculos'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.API);
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(this.API, veiculo);
  }

  findById(id: number): Observable<Veiculo> {
    const url = `${this.API}/${id}`
    return this.http.get<Veiculo>(url)
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.API}/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo);
  }

  delete(id: number): Observable<Veiculo> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Veiculo>(url);
  }

  getVeiculoIdByPlaca(placa: string): Observable<number> {
    const url = `${this.API}/placa?placa=${placa}`;
    return this.http.get<Veiculo>(url).pipe(
      map(veiculo => {
        if (veiculo && veiculo.id){
          return veiculo.id;
        }
      })
    )
  }
}
