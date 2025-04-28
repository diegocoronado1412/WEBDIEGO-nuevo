import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMascotasComponent } from './veterinario-mascotas.component';

describe('VeterinarioMascotasComponent', () => {
  let component: VeterinarioMascotasComponent;
  let fixture: ComponentFixture<VeterinarioMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioMascotasComponent]
    });
    fixture = TestBed.createComponent(VeterinarioMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
