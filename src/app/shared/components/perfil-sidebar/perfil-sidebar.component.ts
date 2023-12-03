import { Component, OnInit, Input } from '@angular/core';
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
  htmlDefinitivo: boolean = false;
  imgProfileTemp: any = 'https://avatars.githubusercontent.com/u/103096096?v=4';
  imgProfile: any;
  imgCover: any;
  private _userAge: number | null = null;

  constructor() {

  }

  ngOnInit(): void {
    if(this.modeloHtmlTemp === true){
      this.htmlDefinitivo = true;
    }
    console.log(this.dadosPerfilRecebido);
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
      }
      if(this.dadosPerfil.coverImg){
        this.imgCover = 'data:image/*;base64,' + this.dadosPerfil.coverImg
      }
      console.log(this.imgCover);
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      // Aqui você pode fazer o que quiser com o arquivo.
      // Por exemplo, exibir a imagem temporária.
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgProfileTemp = e.target.result;
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
