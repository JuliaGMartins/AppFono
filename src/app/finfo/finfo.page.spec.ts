import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfoPage } from './finfo.page';

describe('FinfoPage', () => {
  let component: FinfoPage;
  let fixture: ComponentFixture<FinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
