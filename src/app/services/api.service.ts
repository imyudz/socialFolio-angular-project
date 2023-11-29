import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { profileValues } from './Model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) { }

  public getProfileData(): Observable<any> {
    const urlProfile = 'http://localhost:8080/api/v1/profile';
    
    return this.http.get<any>(urlProfile);
  }


}
