import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';

@Component({
  selector: 'app-avatar-component',
  templateUrl: './avatar-component.component.html',
  styleUrls: ['./avatar-component.component.css']
})
export class AvatarComponentComponent implements OnInit {

  constructor(public servico: ApiService, private router: Router){}
  imgProfile: any;
  dadosPerfil: UserDetailsResponse[] | null = null;

  usuarios: any[] = []

  ngOnInit(): void {
    this.getAllUserBasicInfos();
  }

  navigateVisit(id: any){
    console.log("navigate:"+id)
    this.router.navigate(['/curriculo/'+id])
  }
  getAllUserBasicInfos() {
    this.servico.getAllUsers().subscribe((resposta : any)=>
    {
      console.log('Resposta da API: ' + resposta);
      console.log(JSON.stringify(resposta))
      this.usuarios = resposta;

    })
  }

}

