import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { PerfilSidebarComponent } from "./components/perfil-sidebar/perfil-sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { AvatarComponentComponent } from './components/avatar-component/avatar-component.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PerfilSidebarComponent,
    AvatarComponentComponent
    // Outros componentes compartilhados, se houver
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
    // Outros módulos necessários para o SharedModule, se houver
  ],
  exports: [
    HeaderComponent,
    PerfilSidebarComponent,
    AvatarComponentComponent
    // Exporta os componentes para serem usados em outros módulos
  ]
})
export class SharedModule {}
