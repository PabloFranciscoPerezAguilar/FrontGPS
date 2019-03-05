import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealunidadesComponent } from './realunidades.component';

describe('RealunidadesComponent', () => {
  let component: RealunidadesComponent;
  let fixture: ComponentFixture<RealunidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealunidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
