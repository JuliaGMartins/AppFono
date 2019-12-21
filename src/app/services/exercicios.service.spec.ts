import { TestBed } from '@angular/core/testing';

import { ExerciciosService } from './exercicios.service';

describe('ExerciciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciciosService = TestBed.get(ExerciciosService);
    expect(service).toBeTruthy();
  });
});
