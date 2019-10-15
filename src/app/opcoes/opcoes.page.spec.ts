import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesPage } from './opcoes.page';

describe('OpcoesPage', () => {
  let component: OpcoesPage;
  let fixture: ComponentFixture<OpcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
