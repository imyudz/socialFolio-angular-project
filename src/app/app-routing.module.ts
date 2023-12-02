import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { CurriculoSectionComponent } from './pages/curriculo-section/curriculo-section.component';
import { PerfilSectionComponent } from './pages/perfil-section/perfil-section.component';
import { authGuardFn } from './services/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: "", redirectTo: "/feed", pathMatch: 'full'},
  //{ path: "feed", component: PostSectionComponent, canActivate: [authGuardFn], data: {layout: "default-layout"} },
  { path: "feed", component: PostSectionComponent },
  { path: "curriculo", component: CurriculoSectionComponent, canActivate: [authGuardFn], data: {layout: "default-layout"} },
  { path: "profile", component: PerfilSectionComponent, canActivate: [authGuardFn], data: {layout: "default-layout"} },
  { path: "login", component: LoginComponent, data: {layout: "login-layout"}},
  { path: "register", component: RegistroComponent, data: {layout: "login-layout"}},
  { path: "**", redirectTo: "login" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

