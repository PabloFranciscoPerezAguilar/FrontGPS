import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquiposGPSComponent } from './form-equipos-gps.component';

describe('FormEquiposGPSComponent', () => {
  let component: FormEquiposGPSComponent;
  let fixture: ComponentFixture<FormEquiposGPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEquiposGPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEquiposGPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
