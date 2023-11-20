import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './components/post/post.component';
import { CurriculoSectionComponent } from './pages/curriculo-section/curriculo-section.component';
import { PerfilSidebarComponent } from './components/perfil-sidebar/perfil-sidebar.component';
import { PerfilSectionComponent } from './pages/perfil-section/perfil-section.component';
import { ProfileSideCardComponent } from './components/profile-side-card/profile-side-card.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostSectionComponent,

    PostComponent,
    CurriculoSectionComponent,
    PerfilSidebarComponent,
    PerfilSectionComponent,
    ProfileSideCardComponent,
    ProfileInfoComponent
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
