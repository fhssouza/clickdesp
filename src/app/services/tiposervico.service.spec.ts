import { TestBed } from '@angular/core/testing';

import { TiposervicoService } from './tiposervico.service';

describe('TiposervicoService', () => {
  let service: TiposervicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposervicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
