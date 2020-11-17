import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = localStorage.getItem('user');

    if (user) {
      // bóc tách
      const { accessToken } = JSON.parse(user);
      // clone trả về request mới
      request = request.clone({
        headers: request.headers.append("Authorization", `Bearer ${accessToken}`)
      })

    }
    return next.handle(request);
  }
}
