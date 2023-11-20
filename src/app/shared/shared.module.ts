import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { PerfilSidebarComponent } from "./components/perfil-sidebar/perfil-sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HeaderComponent,
    PerfilSidebarComponent
    // Outros componentes compartilhados, se houver
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
    // Outros módulos necessários para o SharedModule, se houver
  ],
  exports: [
    HeaderComponent,
    PerfilSidebarComponent
    // Exporta os componentes para serem usados em outros módulos
  ]
})
export class SharedModule {}
