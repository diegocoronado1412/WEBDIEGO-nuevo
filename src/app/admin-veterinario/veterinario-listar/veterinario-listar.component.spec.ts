import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioListarComponent } from './veterinario-listar.component';

describe('VeterinarioListarComponent', () => {
  let component: VeterinarioListarComponent;
  let fixture: ComponentFixture<VeterinarioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioListarComponent]
    });
    fixture = TestBed.createComponent(VeterinarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
