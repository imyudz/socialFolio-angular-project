import { UserDetailsResponse } from './models/UserDetailsResponse.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) { }

  API_SERVICE_URL: string = 'http://localhost:8080/api/v1/demo';
  public getUserDetails(userId: number): Observable<UserDetailsResponse> {
    return this.http.get<UserDetailsResponse>(this.API_SERVICE_URL + `/userinfo/${userId}`);
  }

  public getAllUsers(): Observable<UserDetailsResponse[]> {
    console.log("getAllUsers")
    return this.http.get<UserDetailsResponse[]>(this.API_SERVICE_URL + '/usersinfo')
  }
}
