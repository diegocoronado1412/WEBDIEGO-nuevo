import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioTratamientosComponent } from './veterinario-tratamientos.component';

describe('VeterinarioTratamientosComponent', () => {
  let component: VeterinarioTratamientosComponent;
  let fixture: ComponentFixture<VeterinarioTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioTratamientosComponent]
    });
    fixture = TestBed.createComponent(VeterinarioTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
