import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Veiculo } from '../models/Veiculo';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = `${environment.API}veiculos`

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

  getVencimentos(dataInicio: string, dataFim: string): Observable<any[]> {
    const url = `${this.API}/vencimentos?dataInicio=${dataInicio}&dataFim=${dataFim}`;
    return this.http.get<any[]>(url);
  }

  getLicenciamentoGeralByFinalPlaca(finalPlaca: string): Observable<any[]> {
    const url = `${this.API}/licenciamento/geral/final-placa/${finalPlaca}`;
    return this.http.get<any[]>(url);
  }

  getLicenciamentoByFinalPlacaAndProprietario(finalPlaca: string, proprietarioId: string): Observable<any[]> {
    const url = `${this.API}/licenciamento/final-placa/${finalPlaca}?proprietarioId=${proprietarioId}`;
    return this.http.get<any[]>(url);
  }
}
