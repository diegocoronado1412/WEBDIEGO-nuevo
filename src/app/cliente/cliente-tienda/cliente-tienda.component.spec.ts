import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTiendaComponent } from './cliente-tienda.component';

describe('ClienteTiendaComponent', () => {
  let component: ClienteTiendaComponent;
  let fixture: ComponentFixture<ClienteTiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteTiendaComponent]
    });
    fixture = TestBed.createComponent(ClienteTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
