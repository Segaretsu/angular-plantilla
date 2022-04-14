import { TestBed } from '@angular/core/testing';

import { LoginPrincipalService } from './login-principal.service';

describe('LoginPrincipalService', () => {
  let service: LoginPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
