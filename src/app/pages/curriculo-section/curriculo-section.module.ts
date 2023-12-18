import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurriculoSectionComponent } from './curriculo-section.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    CurriculoSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild()
  ]
})
export class CurriculoSectionModule { }
