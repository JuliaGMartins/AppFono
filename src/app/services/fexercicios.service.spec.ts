import { TestBed } from '@angular/core/testing';

import { fexerciciosService } from './fexercicios.service';

describe('FexerciciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: fexerciciosService = TestBed.get(fexerciciosService);
    expect(service).toBeTruthy();
  });
});
