import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioDetalleComponent } from './veterinario-detalle.component';

describe('VeterinarioDetalleComponent', () => {
  let component: VeterinarioDetalleComponent;
  let fixture: ComponentFixture<VeterinarioDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioDetalleComponent]
    });
    fixture = TestBed.createComponent(VeterinarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
