import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSideCardComponent } from './components/profile-side-card/profile-side-card.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilSectionComponent } from './perfil-section.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileSideCardComponent,
    ProfileInfoComponent,
    PerfilSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class PerfilSectionModule { }
