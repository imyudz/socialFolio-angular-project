import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent {

  userDetails: UserDetailsResponse | null = null;
  private userId: number | null = null;

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService){
  }

  ngOnInit(): void {
    if (this.authService.userID){
      this.userId = this.authService.userID;
      this.apiService.getUserDetails(this.userId).subscribe({
        next: (response: UserDetailsResponse) => {
          console.log(response);
          this.userDetails = response;
        },
        error: (error) => {
          console.log("Erro ao obter as informações de usuário", error);
        }
      });
    }
  }
}
