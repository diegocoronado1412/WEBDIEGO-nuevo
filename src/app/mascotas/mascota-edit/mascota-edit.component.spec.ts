import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEditComponent } from './mascota-edit.component';

describe('MascotaEditComponent', () => {
  let component: MascotaEditComponent;
  let fixture: ComponentFixture<MascotaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaEditComponent]
    });
    fixture = TestBed.createComponent(MascotaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
