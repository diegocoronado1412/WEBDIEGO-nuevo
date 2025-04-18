import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCarritoComponent } from './cliente-carrito.component';

describe('ClienteCarritoComponent', () => {
  let component: ClienteCarritoComponent;
  let fixture: ComponentFixture<ClienteCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCarritoComponent]
    });
    fixture = TestBed.createComponent(ClienteCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
