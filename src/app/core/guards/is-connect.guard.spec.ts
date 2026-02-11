import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isConnectGuard } from './is-connect.guard';

describe('isConnectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isConnectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
