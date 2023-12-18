import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private servico: ApiService, private auth: AuthService){}
  private userId: number | any = null;

  dadosPerfil: UserDetailsResponse | null = null;

  dtNascUser: any =''; //modelo de entrada de data 2021-12-02
  nomeSocial: any ='';
  cidadeUser: any ='';
  estadoUser: any = '';
  sobrenomeUser: any = '';
  nameUser: any = '';
  emailUser: any = ''
  phoneNumber: any ='';
  profissao: any = '';
  trampoSelecionado: any = '';
  descricao: any ='';
  enterprise: any = '';
  trampa: string = '';
  educacao: any = '';
  workplace: any = '';
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

  logoutSystem(){
    this.auth.logout();
  }
  salvarDados() {
    console.log('salvou');
    console.log('data', this.dtNascUser);
    console.log('nome', this.nameUser);
    console.log('sobrenome', this.sobrenomeUser);
    // Adicione outras variáveis aqui conforme necessário
  }

  getProfileData() {
    if(this.auth.userID != null){
      this.servico.getUserDetails(this.auth.userID).subscribe((resposta: any) => {
        this.dadosPerfil = resposta;
        this.obtemData()
      });
    }
  }
  obtemData() {
    this.cidadeUser = this.dadosPerfil?.city;
    this.nomeSocial = this.dadosPerfil?.socialName;
    this.emailUser = this.dadosPerfil?.email;
    this.estadoUser = this.dadosPerfil?.state;
    this.sobrenomeUser = this.dadosPerfil?.name?.split(' ')[this.dadosPerfil?.name?.split(' ').length - 1];
    this.nameUser = this.dadosPerfil?.name?.split(' ')[0];
    this.phoneNumber = this.dadosPerfil?.phone;
    this.descricao = this.dadosPerfil?.description;
    this.profissao = this.dadosPerfil?.profission;
    this.educacao = this.dadosPerfil?.recent_Education;
    this.trampa = this.dadosPerfil?.employee == true ? '1' : '0';
    this.workplace = this.dadosPerfil?.workplace;
    this.enterprise = this.dadosPerfil?.current_Company;
    this.dtNascUser = this.dadosPerfil?.dtNasc;

  }

}

