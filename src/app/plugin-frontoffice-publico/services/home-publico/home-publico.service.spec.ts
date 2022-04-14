import { TestBed } from '@angular/core/testing';

import { HomePublicoService } from './home-publico.service';

describe('HomePublicoService', () => {
  let service: HomePublicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePublicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
