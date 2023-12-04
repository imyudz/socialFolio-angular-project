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
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.markedTest = `
    # Exemplo de Texto em Markdown

    Este é um exemplo de texto em **Markdown** que pode ser usado para demonstração. Aqui estão alguns elementos comuns:

    ## Títulos

    Os títulos são criados usando hashtags (#). Quanto mais hashtags, menor o nível do título.

    ## Estilos de Texto

    Você pode usar **negrito**, *itálico* ou até mesmo ***ambos***.

    ## Listas

    ### Lista Não Ordenada
    - Item 1
    - Item 2
    - Item 3

    ### Lista Ordenada
    1. Primeiro item
    2. Segundo item
    3. Terceiro item
    `;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.userId){
      this.apiService.getUserDetails(this.userId).subscribe({
        next: (response: UserDetailsResponse) => {
          console.log("Recebi detalhes de usuário: ", response);
          this.userDetails = response;
        },
        error: (error) => {
          console.error("Erro ao obter as informações de usuário", error);
        }
      });

      this.apiService.getCurriculumInfo(this.userId).subscribe({
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

}
