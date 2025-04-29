import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMenuComponent } from './veterinario-menu.component';

describe('VeterinarioMenuComponent', () => {
  let component: VeterinarioMenuComponent;
  let fixture: ComponentFixture<VeterinarioMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioMenuComponent]
    });
    fixture = TestBed.createComponent(VeterinarioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
