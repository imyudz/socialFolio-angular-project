import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-side-card',
  templateUrl: './profile-side-card.component.html',
  styleUrls: ['./profile-side-card.component.css']
})
export class ProfileSideCardComponent {
  imgProfileTemp: any = 'https://avatars.githubusercontent.com/u/110204686?v=4'; 
  imgProfile: any

  alterarImagem(){
    console.log("Foi")
    console.log(this.imgProfile )
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

}
