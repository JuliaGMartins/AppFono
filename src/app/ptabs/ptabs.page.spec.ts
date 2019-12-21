import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTabsPage } from './ptabs.page';

describe('PTabsPage', () => {
  let component: PTabsPage;
  let fixture: ComponentFixture<PTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PTabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
