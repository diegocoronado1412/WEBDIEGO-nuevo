import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVeterinarioMascotasSeleccionarComponent } from './cliente-veterinario-mascotas-seleccionar.component';

describe('ClienteVeterinarioMascotasSeleccionarComponent', () => {
  let component: ClienteVeterinarioMascotasSeleccionarComponent;
  let fixture: ComponentFixture<ClienteVeterinarioMascotasSeleccionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteVeterinarioMascotasSeleccionarComponent]
    });
    fixture = TestBed.createComponent(ClienteVeterinarioMascotasSeleccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
