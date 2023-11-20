import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSectionComponent } from './perfil-section.component';

describe('PerfilSectionComponent', () => {
  let component: PerfilSectionComponent;
  let fixture: ComponentFixture<PerfilSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilSectionComponent]
    });
    fixture = TestBed.createComponent(PerfilSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
