import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FexerciciosPage } from './fexercicios.page';

describe('FexerciciosPage', () => {
  let component: FexerciciosPage;
  let fixture: ComponentFixture<FexerciciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FexerciciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FexerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
