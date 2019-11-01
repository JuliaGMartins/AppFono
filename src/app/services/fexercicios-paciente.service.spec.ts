import { TestBed } from '@angular/core/testing';

import { FexerciciosPacienteService } from './fexercicios-paciente.service';

describe('FexerciciosPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FexerciciosPacienteService = TestBed.get(FexerciciosPacienteService);
    expect(service).toBeTruthy();
  });
});
