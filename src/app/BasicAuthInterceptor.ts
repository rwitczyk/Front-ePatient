import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private login = 'admin';
  private password = 'password';

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        ContentType: 'application/json',
        Authorization: 'Basic ' + btoa(this.login + ':' + this.password),
        AccessControlAllowMethods: 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Origin': '*',
        AccessControlAllowHeaders: 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
        AccessControlAllowCredentials: 'true'
      }
    });

    return next.handle(request);
  }
}
