import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';

@Component({
  selector: 'app-perfil-sidebar',
  templateUrl: './perfil-sidebar.component.html',
  styleUrls: ['./perfil-sidebar.component.css']
})
export class PerfilSidebarComponent implements OnInit {
  @Input() dadosPerfilRecebido: UserDetailsResponse | null = null;
  @Input() modeloHtmlTemp: boolean = false;
  dadosPerfil: UserDetailsResponse | null = null;
  dadosImg: UserDetailsResponse | null = null;
  htmlDefinitivo: boolean = false;
  imgProfilePerfil: any = '';
  imgCoverPerfil: any = '';

  imgProfile: any;
  imgCover: any;
  private _userAge: number | null = null;
  private userId: number | any = null;

  constructor(private servico: ApiService, private auth: AuthService) {

  }

  ngOnInit(): void {
    console.log("Os dados recebidos:");
    if (this.dadosPerfilRecebido) {
      this.dadosPerfil = this.dadosPerfilRecebido;
      console.log("Dados Perfil", this.dadosPerfil);
      //Formatando data
      if (this.dadosPerfil.dtNasc) {
        const dateOfBirth = new Date(this.dadosPerfil.dtNasc);
        if (!isNaN(dateOfBirth.getTime())) {
          this.setUserAge(dateOfBirth);
        }
      }
      //Lendo imagem
      if(this.dadosPerfil.avatar){
        this.imgProfile = 'data:image/*;base64,' + this.dadosPerfil.avatar
        console.log(this.imgProfilePerfil)
      }
      if(this.dadosPerfil.coverImg){
        this.imgCover = 'data:image/*;base64,' + this.dadosPerfil.coverImg
      }
      console.log(this.imgCover);
    }
    if(this.modeloHtmlTemp === true){
      console.log('entrou em perfil')
      this.htmlDefinitivo = true;
      this.getProfileData();
      console.log(this.dadosImg)
      
    }
  }
  getProfileData() {
    console.log('Entrou no getProfile')


    if(this.auth.userID != null){
      console.log('userId'+this.auth.userID)
      this.servico.getUserDetails(this.auth.userID).subscribe((resposta: any) => {
        console.log('resposta'+resposta)
        this.dadosImg = resposta;
        if(this.dadosImg){
          if(this.dadosImg.avatar !=  null){
            this.imgProfilePerfil = this.dadosImg.avatar
            console.log(this.imgProfilePerfil)
          }
          if(this.dadosImg.coverImg){
            this.imgCoverPerfil = this.dadosImg.coverImg
          }
        }
      });
    }
    
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      // Aqui você pode fazer o que quiser com o arquivo.
      // Por exemplo, exibir a imagem temporária.
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgProfilePerfil = e.target.result;
      };
      reader.readAsDataURL(file);

      // Logar detalhes do arquivo no console.
      console.log('Nome do arquivo:', file.name);
      console.log('Tipo do arquivo:', file.type);
      console.log('Tamanho do arquivo:', file.size);
    } else {
      console.log('Por favor, escolha um arquivo de imagem.');
    }
  }

  public get userAge(): number | null{
    return this._userAge;
  }
  public setUserAge(bornDate: Date | null) {
    if(bornDate){
      this._userAge = new Date().getFullYear() - bornDate.getFullYear();
    }
  }

  getSafeImageUrl(bytes: Uint8Array | null): string {
    if (!bytes) {
      return '';
    }
    // Cria um Blob a partir dos bytes da imagem
    const blob = new Blob([bytes]);
    // Cria um URL seguro para o Blob
    const safeUrl = URL.createObjectURL(blob);
    return safeUrl;
  }

}
