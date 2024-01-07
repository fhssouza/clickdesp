import { TestBed } from '@angular/core/testing';

import { OrdemservicoService } from './ordemservico.service';

describe('OrdemservicoService', () => {
  let service: OrdemservicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdemservicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
