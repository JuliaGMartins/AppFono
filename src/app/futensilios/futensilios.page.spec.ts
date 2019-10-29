import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutensiliosPage } from './futensilios.page';

describe('FutensiliosPage', () => {
  let component: FutensiliosPage;
  let fixture: ComponentFixture<FutensiliosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutensiliosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutensiliosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
