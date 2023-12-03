import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();

    if (token) {
      console.log("Existe token, interceptando");

      // Clone the request and add authorization header with token
      const authReq = req.clone({
        headers: req.headers
        .set('Authorization', `Bearer ${token}`)
      });

      // Send cloned request with header to the next handler
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          error &&
            this.authService.logout(); // Logout user
          return throwError(error);
        })
      );
    }
    console.log("não existe token, não interceptei");
    // If no token, proceed with the original request
    return next.handle(req);
  }
}
