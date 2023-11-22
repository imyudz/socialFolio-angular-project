import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { PostSectionComponent } from './post-section.component';


@NgModule({
  declarations: [
    PostComponent,
    PostSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
})
export class PostSectionModule { }
