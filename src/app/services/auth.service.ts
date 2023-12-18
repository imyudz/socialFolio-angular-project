import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationResponse } from './models/AuthenticationResponse.model';
import { LoginRequest } from './models/LoginRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "https://deft-month-production.up.railway.app/api/v1/auth"
  private apiURL = "https://deft-month-production.up.railway.app/api/v1/demo"
  private loggedIn = new BehaviorSubject<boolean>(false);
  private tokenKey = "token";
  private userIdKey = "userId";


  constructor(private http: HttpClient, private router: Router) { }

  login(loginBody: LoginRequest): Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(this.authURL+"/authenticate", loginBody);
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
    localStorage.removeItem(this.userIdKey);
    this.setLoggedIn(false);
    this.router.navigate(['/']);
  }

  isTokenActive(): Observable<Boolean> {
    const token = this.getToken();
    if (!token) {
      return of(false); //Se não houver token, o token não está mais ativo
    }
    return this.http.get<Boolean>(this.apiURL).pipe(
      map(response => {
        console.log(response);
        return true;
      }), //se a resposta for bem sucedida, o token está ativo
      catchError(error => {
        if (error.status === 403) {
          this.logout(); // Se o token não for válido (403), faz logout
        }
        return of(false);
      })
    );
  }

  public get userID(): number | null {
    return localStorage.getItem(this.userIdKey) && localStorage.getItem(this.userIdKey) !== "" ? Number(localStorage.getItem(this.userIdKey)) : null;
  }
  public set userID(value: number | null) {
    localStorage.setItem(this.userIdKey, value !== null ? value.toString() : "");
  }
}
