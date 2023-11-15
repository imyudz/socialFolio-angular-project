import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSectionComponent } from './post-section.component';

describe('PostSectionComponent', () => {
  let component: PostSectionComponent;
  let fixture: ComponentFixture<PostSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSectionComponent]
    });
    fixture = TestBed.createComponent(PostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
