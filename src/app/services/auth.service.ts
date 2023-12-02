import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationResponse } from './models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080/api/v1/auth"
  private loggedIn = new BehaviorSubject<boolean>(false);
  private tokenKey = "token";

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.authURL+"/authenticate", {
      username,
      password
    });
  };

  register(registerBody: FormData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.authURL+"/register", registerBody);
  }

  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
