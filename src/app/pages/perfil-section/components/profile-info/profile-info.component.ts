import { Component, NgModule, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(public servico: ApiService){}

  val:UserDetailsResponse[]=[];

  dtNascUser: string =  '' //modelo de entrada de data 2021-12-02
  nomeSocial: any ='';
  cidadeUser: any ='';
  estadoUser: any = '';
  sobrenomeUser: any = '';
  nameUser: any = '';
  emailUser: any = ''
  phoneNumber: any ='';
  profissao: any = '';
  experiencia: any = '';
  trampoSelecionado: any = '';
  descricao: any ='';
  enterprise: any = '';
  trampa: string = '';
  educacao: string = '';
  workplace: string = '';
  niveis = [
    'Selecione', 'Estagiario/trainne', 'Junior','Pleno','Senior'
  ]

  ngOnInit(): void {
    this.nameUser = 'Dev'
    this.trampoSelecionado = 'Selecione'
    this.getProfileData();
  }

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

    getProfileData() {
    this.servico.getUserDetails(1).subscribe((resposta : any)=>
    {
      console.log(resposta.data);
      this.val = (resposta.data);
      console.log(this.val);
    })
  }


}

