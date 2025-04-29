import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioEditarComponent } from './veterinario-editar.component';

describe('VeterinarioEditarComponent', () => {
  let component: VeterinarioEditarComponent;
  let fixture: ComponentFixture<VeterinarioEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioEditarComponent]
    });
    fixture = TestBed.createComponent(VeterinarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
