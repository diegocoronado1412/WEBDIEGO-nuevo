import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNavComponent } from './cliente-nav.component';

describe('ClienteNavComponent', () => {
  let component: ClienteNavComponent;
  let fixture: ComponentFixture<ClienteNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteNavComponent]
    });
    fixture = TestBed.createComponent(ClienteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
