import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {


  ngOnInit(): void {
    this.nameUser = 'Dev'
    this.trampoSelecionado = 'Selecione'
  }
  dtNascUser: string =  '2021-12-02'
  
  sobrenomeUser: any = '';
  nameUser: any = '';
  emailUser: any = ''
  phoneNumber: any ='';
  profissao: any = '';
  experiencia: any = '';
  trampoSelecionado: any = '';
  descricao: any ='';

  niveis = [
    'Selecione', 'Estagiario/trainne', 'Junior','Pleno','Senior'
  ]
  onChange(){
    this.trampoSelecionado = this.niveis.filter((x) => x == this.trampoSelecionado)[0];
    console.log(this.trampoSelecionado)
  }
  
  salvarDados(){
    console.log('salvou')
    console.log('data',  this.dtNascUser)
    console.log('nome',  this.nameUser)
    console.log('sobrenome',  this.sobrenomeUser)
    
    

  }
}
