import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtexturasPage } from './ftexturas.page';

describe('FtexturasPage', () => {
  let component: FtexturasPage;
  let fixture: ComponentFixture<FtexturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtexturasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtexturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
