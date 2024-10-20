import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Credencial } from '../models/Credencial';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API = `${environment.API}login`;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  login(creds: Credencial){
    return this.http.post<any>(`${this.API}`, creds, {
      observe: 'response',
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }));
  }

  getToken(): string{
    return localStorage.getItem('token')!;
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
}

  // get obterTokenUsuario(): string {
  //   return localStorage.getItem('token')
  //     ? JSON.parse(atob(localStorage.getItem('token')))
  //     : null;
  // }

  // private readonly API = 'Http://localhost:8080/clickdesp/login';

  // private currentUserSubject: BehaviorSubject<Usuario>;
  // public currentUser: Observable<Usuario>;

  // constructor(
  //   private http: HttpClient
  // ) {
  //   this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')!));
  //   this.currentUser = this.currentUserSubject.asObservable();
  //  }

  //  public get currentUserValue(): Usuario {
  //   return this.currentUserSubject.getValue();
  //  }

  //  login(email: string, senha: string){
  //   return this.http.post<any>(`${this.API}`, { email, senha })
  //   .pipe(map((usuario) => {
  //     localStorage.setItem('currentUser', JSON.stringify(usuario));
  //     this.currentUserSubject.next(usuario);
  //     return usuario;
  //   }))
  //  }

  //  logout(){
  //   localStorage.removeItem('currentUser');
  //   localStorage.removeItem('username');
  //   this.currentUserSubject.next(null!);
  //  }

  //  setUserName(username: string){
  //   localStorage.setItem('username', JSON.stringify(username));
  //  }

  //  getUserName(){
  //   return JSON.parse(localStorage.getItem('username')!);
  //  }

}
