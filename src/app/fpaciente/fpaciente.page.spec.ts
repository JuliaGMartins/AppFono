import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpacientePage } from './fpaciente.page';

describe('FpacientePage', () => {
  let component: FpacientePage;
  let fixture: ComponentFixture<FpacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
