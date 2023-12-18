import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { faFileLines, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faFileLines = faFileLines;
  faGlobe = faGlobe;
  faUser = faUser;

  constructor(private authService: AuthService, private router: Router){}

  redirecionarParaCurriculoUsuarioAtual(): void {
    const currentLoggedUserId = this.authService.userID; // Obtém o ID do usuário atual
    console.log("Usuário atual logado: " + currentLoggedUserId);
    this.router.navigate([`/curriculo/${currentLoggedUserId}`]);
  }

}
