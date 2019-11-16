import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('jwtToken') != undefined) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + sessionStorage.getItem('jwtToken'),
          // ContentType: 'application/json',
          // AccessControlAllowMethods: 'POST, GET, OPTIONS, PUT, DELETE',
          // AccessControlAllowOrigin: '*',
          // AccessControlAllowHeaders: 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
          // AccessControlAllowCredentials: 'true'
        }
      });
    }
    return next.handle(request);
  }
}
