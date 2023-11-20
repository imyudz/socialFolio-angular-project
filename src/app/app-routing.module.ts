import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { CurriculoSectionComponent } from './pages/curriculo-section/curriculo-section.component';
import { PerfilSectionComponent } from './pages/perfil-section/perfil-section.component';

const routes: Routes = [
  { path: "feed", component: PostSectionComponent },
  { path: "curriculo", component: CurriculoSectionComponent },
  { path: "profile", component: PerfilSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

