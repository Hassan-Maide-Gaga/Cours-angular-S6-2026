import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { privateRoutes } from './features/private/privateRoutes.routes';
import { publicRoutes } from './features/public/publicRoutes.routes';
import { DEMANDE_SERVICE_TOKEN } from './features/private/demande-rdv/services/interfaces/demande.interface.service';
import { DemandeMockService } from './features/private/demande-rdv/services/demande.mock.service';
import { SECURITY_SERVICE_TOKEN } from './core/services/interfaces/security.interface.service';
import { SecurityMockService } from './core/services/security.service.mock';

const allRoutes = [
  ...privateRoutes,
  ...publicRoutes
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: DEMANDE_SERVICE_TOKEN,
      useClass: DemandeMockService
    },
    {
      provide: SECURITY_SERVICE_TOKEN,
      useClass: SecurityMockService
    },
  ]
};
