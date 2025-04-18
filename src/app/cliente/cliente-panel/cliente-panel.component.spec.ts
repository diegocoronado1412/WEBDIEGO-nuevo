import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePanelComponent } from './cliente-panel.component';

describe('ClientePanelComponent', () => {
  let component: ClientePanelComponent;
  let fixture: ComponentFixture<ClientePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientePanelComponent]
    });
    fixture = TestBed.createComponent(ClientePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
