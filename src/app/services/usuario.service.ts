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
  private readonly RESET_PASSWORD_API = `${environment.API}auth`;

  constructor(
    private http: HttpClient
  ) { }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario);
  }

  requestResetPassword(email: string): Observable<any> {
    return this.http.post(`${this.API}/request-reset-password`, { email });
  }

  resetPassword(email: string, token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.RESET_PASSWORD_API}/reset-password`, { email, token, newPassword });
  }

}
