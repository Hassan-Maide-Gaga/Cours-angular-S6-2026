import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { privateRoutes } from './features/private/privateRoutes.routes';
import { publicRoutes } from './features/public/publicRoutes.routes';

const allRoutes = [
  ...privateRoutes,
  ...publicRoutes
];


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(allRoutes)]
};
