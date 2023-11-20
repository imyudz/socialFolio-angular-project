import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoSectionComponent } from './curriculo-section.component';

describe('CurriculoSectionComponent', () => {
  let component: CurriculoSectionComponent;
  let fixture: ComponentFixture<CurriculoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoSectionComponent]
    });
    fixture = TestBed.createComponent(CurriculoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
