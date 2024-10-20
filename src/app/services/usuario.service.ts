import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuarios`

  constructor(
    private http: HttpClient
  ) { }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario);
  }
}
