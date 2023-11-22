import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSidebarComponent } from './perfil-sidebar.component';

describe('PerfilSidebarComponent', () => {
  let component: PerfilSidebarComponent;
  let fixture: ComponentFixture<PerfilSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilSidebarComponent]
    });
    fixture = TestBed.createComponent(PerfilSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
