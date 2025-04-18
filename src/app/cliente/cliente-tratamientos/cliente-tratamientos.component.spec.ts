import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTratamientosComponent } from './cliente-tratamientos.component';

describe('ClienteTratamientosComponent', () => {
  let component: ClienteTratamientosComponent;
  let fixture: ComponentFixture<ClienteTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteTratamientosComponent]
    });
    fixture = TestBed.createComponent(ClienteTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
