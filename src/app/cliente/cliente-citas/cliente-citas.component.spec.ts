import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCitasComponent } from './cliente-citas.component';

describe('ClienteCitasComponent', () => {
  let component: ClienteCitasComponent;
  let fixture: ComponentFixture<ClienteCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCitasComponent]
    });
    fixture = TestBed.createComponent(ClienteCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
