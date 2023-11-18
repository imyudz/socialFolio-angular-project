import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilSidebarComponent } from './components/perfil-sidebar/perfil-sidebar.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostSectionComponent,
    PerfilSidebarComponent,
    PostComponent
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
