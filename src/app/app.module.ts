import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilSectionComponent } from './pages/perfil-section/perfil-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostSectionComponent,
    PerfilSectionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
