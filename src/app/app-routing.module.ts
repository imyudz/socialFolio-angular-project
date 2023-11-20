import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { CurriculoSectionComponent } from './pages/curriculo-section/curriculo-section.component';
import { PerfilSectionComponent } from './pages/perfil-section/perfil-section.component';
import { authGuardFn } from './services/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "**", redirectTo: ""},
  { path: "", redirectTo: "/feed", pathMatch: "full" },
  { path: "feed", component: PostSectionComponent, canActivate: [authGuardFn] },
  { path: "curriculo", component: CurriculoSectionComponent, canActivate: [authGuardFn] },
  { path: "profile", component: PerfilSectionComponent, canActivate: [authGuardFn] },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

