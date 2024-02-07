import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authenticationService.getToken();

  if(token && !request.url.startsWith('https://viacep.com.br/ws/')){
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
            token: `${token}`
        }
      });
    }
    return next.handle(request);
  }


}
