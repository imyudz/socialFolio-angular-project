import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';

@Component({
  selector: 'app-curriculo-section',
  templateUrl: './curriculo-section.component.html',
  styleUrls: ['./curriculo-section.component.css']
})
export class CurriculoSectionComponent {
  private userId: number | null = null;
  userDetails: UserDetailsResponse | null = null;

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute){
    this.userId = this.activatedRoute.snapshot.params['userId'];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.userId){
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
