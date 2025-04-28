import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioClienteComponent } from './veterinario-cliente.component';

describe('VeterinarioClienteComponent', () => {
  let component: VeterinarioClienteComponent;
  let fixture: ComponentFixture<VeterinarioClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioClienteComponent]
    });
    fixture = TestBed.createComponent(VeterinarioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
