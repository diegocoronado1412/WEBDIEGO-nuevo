import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaListarComponent } from './mascota-list.component';

describe('MascotaListComponent', () => {
  let component: MascotaListarComponent;
  let fixture: ComponentFixture<MascotaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaListarComponent]
    });
    fixture = TestBed.createComponent(MascotaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
