import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposGPSComponent } from './equipos-gps.component';

describe('EquiposGPSComponent', () => {
  let component: EquiposGPSComponent;
  let fixture: ComponentFixture<EquiposGPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposGPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposGPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
