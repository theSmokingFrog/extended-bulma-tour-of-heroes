import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor() {
  }

  private static putAndPostHeaders(): any {
    return {'Content-Type': 'application/json;charset=UTF-8'};
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    switch (request.method.toLowerCase()) {
      case 'post':
      case 'put':
      case 'delete':
        request = request.clone({
          setHeaders: HttpHeaderInterceptor.putAndPostHeaders()
        });
        break;
      default:
        break;
    }
    return next.handle(request);
  }
}
