import { TestBed } from '@angular/core/testing';

import { FonoaudiologoService } from './fonoaudiologo.service';

describe('FonoaudiologoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FonoaudiologoService = TestBed.get(FonoaudiologoService);
    expect(service).toBeTruthy();
  });
});
