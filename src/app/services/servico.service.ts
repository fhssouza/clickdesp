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

}
