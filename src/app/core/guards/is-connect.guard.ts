import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '@core/services';

export const isConnectGuard: CanActivateFn = (route, state) => {
  let securityService: SecurityService = inject(SecurityService);
  let router = inject(Router)
  if (!securityService.isAuthenticated()) {
    router.navigate(['/public/login'])
    return false;
  }
  return true;
};
