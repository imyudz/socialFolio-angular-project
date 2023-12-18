import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSideCardComponent } from './profile-side-card.component';

describe('ProfileSideCardComponent', () => {
  let component: ProfileSideCardComponent;
  let fixture: ComponentFixture<ProfileSideCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSideCardComponent]
    });
    fixture = TestBed.createComponent(ProfileSideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
