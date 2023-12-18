import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CurriculoInfoResponse } from 'src/app/services/models/CurriculoInfoResponse.model';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curriculo-section',
  templateUrl: './curriculo-section.component.html',
  styleUrls: ['./curriculo-section.component.css']
})
export class CurriculoSectionComponent {
  showNotFoundImg: boolean = false;
  private userId: number | null = null;
  userDetails: UserDetailsResponse | null = null;
  markedTest: string = "";
  sobre: string = "";
  contato: string = "";
  experiencia: string = "";
  formacao: string = "";
  habilidades: string = "";
  conhecimentos: string = "";
  idiomas: string = "";

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        // Use o ID atualizado para buscar e atualizar os dados do currículo
        this.getUserAndCurriculumInfo(userId);
      }
    });
  }

  getUserAndCurriculumInfo(userId: number): void {
    this.apiService.getUserDetails(userId).subscribe({
      next: (response: UserDetailsResponse) => {
        console.log("Recebi detalhes de usuário: ", response);
        this.userDetails = response;
      },
      error: (error) => {
        console.error("Erro ao obter as informações de usuário", error);
      }
    });

    this.apiService.getCurriculumInfo(userId).subscribe({
      next: (response: CurriculoInfoResponse) => {
        console.log(response);
        const { about, formation, experience, contact, skill, knowledge, language } = response;
        this.sobre = about ? about : "";
        this.formacao = formation ? formation : "";
        this.experiencia = experience ? experience : "";
        this.contato = contact ? contact : "";
        this.habilidades = skill ? skill : "";
        this.conhecimentos = knowledge ? knowledge : "";
        this.idiomas = language ? language : "";
      },
      error: (error) => {
        if (error.status === 404) {
          this.showNotFoundImg = true;
        }
      }
    });
  }
}
