import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSectionComponent } from './pages/post-section/post-section.component';
import { CurriculoSectionComponent } from './pages/curriculo-section/curriculo-section.component';

const routes: Routes = [
  { path: "feed", component: PostSectionComponent },
  { path: "curriculo", component: CurriculoSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

