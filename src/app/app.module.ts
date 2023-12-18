import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PostSectionModule } from './pages/post-section/post-section.module';
import { CurriculoSectionModule } from './pages/curriculo-section/curriculo-section.module';
import { PerfilSectionModule } from './pages/perfil-section/perfil-section.module';
import { LoginModule } from './pages/login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegistroModule } from './pages/registro/registro.module';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    PostSectionModule,
    CurriculoSectionModule,
    PerfilSectionModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    RegistroModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
