import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-sidebar',
  templateUrl: './perfil-sidebar.component.html',
  styleUrls: ['./perfil-sidebar.component.css']
})
export class PerfilSidebarComponent implements OnInit {
  @Input() modeloHtmlTemp: boolean = false;
  htmlDefinitivo: boolean = false;
  imgProfileTemp: any = 'https://avatars.githubusercontent.com/u/103096096?v=4'; 
  imgProfile: any

  ngOnInit(): void {
    if(this.modeloHtmlTemp === true){
      this.htmlDefinitivo = true;
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
}
