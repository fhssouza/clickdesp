import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Licenciamento} from "../models/Licenciamento";
import {Veiculo} from "../models/Veiculo";

@Injectable({
  providedIn: 'root'
})
export class LicenciamentoService {

  private readonly API = `${environment.API}licenciamentos`

  constructor(private http: HttpClient) { }

  findAll(): Observable<Licenciamento[]>{
    return this.http.get<Licenciamento[]>(this.API);
  }

  findById(id: number): Observable<Licenciamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Licenciamento>(url)
  }

  create(licenciamento: Licenciamento): Observable<Licenciamento>{
    return this.http.post<Licenciamento>(this.API, licenciamento);
  }

  update(licenciamento: Licenciamento): Observable<Licenciamento> {
    const url = `${this.API}/${licenciamento.id}`;
    return this.http.put<Licenciamento>(url, licenciamento);
  }

  delete(id: number): Observable<Licenciamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Licenciamento>(url);
  }

}
