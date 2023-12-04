import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsResponse } from 'src/app/services/models/UserDetailsResponse.model';


@Component({
  selector: 'app-perfil-section',
  templateUrl: './perfil-section.component.html',
  styleUrls: ['./perfil-section.component.css']
})
export class PerfilSectionComponent {
  corpoHtml: boolean = true
}
