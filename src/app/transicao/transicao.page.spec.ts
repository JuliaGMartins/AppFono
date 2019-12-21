import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransicaoPage } from './transicao.page';

describe('TransicaoPage', () => {
  let component: TransicaoPage;
  let fixture: ComponentFixture<TransicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
