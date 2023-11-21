import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurriculoSectionComponent } from './curriculo-section.component';

@NgModule({
  declarations: [
    CurriculoSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CurriculoSectionModule { }
