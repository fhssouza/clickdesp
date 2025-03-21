import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private readonly API = `${environment.API}api/dashboard/`

  constructor(private http: HttpClient) { }

  getEstatisticas(): Observable<any> {
    return this.http.get(`${this.API}statistics`);
  }

  getProprietariosPorMes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}proprietarios-por-mes`);
  }
}
