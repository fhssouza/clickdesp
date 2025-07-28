import { TestBed } from '@angular/core/testing';

import { LicenciamentoService } from './licenciamento.service';

describe('LicenciamentoService', () => {
  let service: LicenciamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenciamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
