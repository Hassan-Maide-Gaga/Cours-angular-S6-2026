import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { demandeResolver } from './demande.resolver';
import { DEMANDE_SERVICE_TOKEN } from '@private/demande/services/interfaces';

describe('demandeResolver', () => {
  let mockDemandeService: any;
  let mockRoute: Partial<ActivatedRouteSnapshot>;
  let mockState: Partial<RouterStateSnapshot>;

  // Mock des données de retour
  const mockResponse = {
    data: [],
    totalPages: 1,
    currentPage: 1,
    totalItems: 0,
    pages: [1],
    size: 5
  };

  beforeEach(() => {
    // Création du mock du service avec l'interface correcte
    mockDemandeService = {
      getDemandesRDV: jasmine.createSpy('getDemandesRDV').and.returnValue(of(mockResponse))
    };

    // Mock des paramètres de route
    mockRoute = {
      queryParamMap: {
        get: jasmine.createSpy('get').and.callFake((key: string) => {
          const params: { [key: string]: string } = {
            specialite: 'cardiologie',
            statut: 'En attente',
            page: '2',
            size: '10'
          };
          return params[key] || null;
        })
      } as any
    };

    mockState = {};

    TestBed.configureTestingModule({
      providers: [
        { provide: DEMANDE_SERVICE_TOKEN, useValue: mockDemandeService }
      ]
    });
  });

  it('should be created', () => {
    expect(demandeResolver).toBeTruthy();
  });

  it('should call service with default filter when no query params', () => {
    // Mock sans paramètres
    const routeWithoutParams: Partial<ActivatedRouteSnapshot> = {
      queryParamMap: {
        get: jasmine.createSpy('get').and.returnValue(null)
      } as any
    };

    TestBed.runInInjectionContext(() => 
      demandeResolver(routeWithoutParams as ActivatedRouteSnapshot, mockState as RouterStateSnapshot)
    );

    expect(mockDemandeService.getDemandesRDV).toHaveBeenCalledWith({
      specialite: '',
      statut: 'En attente',
      page: 1,
      size: undefined
    });
  });

  it('should call service with query params', () => {
    TestBed.runInInjectionContext(() => 
      demandeResolver(mockRoute as ActivatedRouteSnapshot, mockState as RouterStateSnapshot)
    );

    expect(mockDemandeService.getDemandesRDV).toHaveBeenCalledWith({
      specialite: 'cardiologie',
      statut: 'En attente',
      page: 2,
      size: 10
    });
  });

  it('should return an Observable with DemandeListeResponse type', () => {
    const result = TestBed.runInInjectionContext(() => 
      demandeResolver(mockRoute as ActivatedRouteSnapshot, mockState as RouterStateSnapshot)
    );

    expect(result).toBeDefined();
    expect((result as any).subscribe).toBeDefined();
  });

  it('should handle different statut values', () => {
    const statuts = ['En attente', 'Confirmé', 'Annulé', 'Terminé'];
    
    statuts.forEach(statut => {
      const routeWithStatut: Partial<ActivatedRouteSnapshot> = {
        queryParamMap: {
          get: jasmine.createSpy('get').and.callFake((key: string) => {
            if (key === 'statut') return statut;
            if (key === 'page') return '1';
            return null;
          })
        } as any
      };

      TestBed.runInInjectionContext(() => 
        demandeResolver(routeWithStatut as ActivatedRouteSnapshot, mockState as RouterStateSnapshot)
      );

      expect(mockDemandeService.getDemandesRDV).toHaveBeenCalledWith({
        specialite: '',
        statut: statut,
        page: 1,
        size: undefined
      });
    });
  });

  it('should handle pagination parameters correctly', () => {
    const routeWithPagination: Partial<ActivatedRouteSnapshot> = {
      queryParamMap: {
        get: jasmine.createSpy('get').and.callFake((key: string) => {
          if (key === 'page') return '3';
          if (key === 'size') return '20';
          if (key === 'statut') return 'Confirmé';
          return null;
        })
      } as any
    };

    TestBed.runInInjectionContext(() => 
      demandeResolver(routeWithPagination as ActivatedRouteSnapshot, mockState as RouterStateSnapshot)
    );

    expect(mockDemandeService.getDemandesRDV).toHaveBeenCalledWith({
      specialite: '',
      statut: 'Confirmé',
      page: 3,
      size: 20
    });
  });
});

// Test simplifié pour vérifier juste l'existence
describe('demandeResolver Simple Test', () => {
  it('should be defined', () => {
    expect(demandeResolver).toBeDefined();
  });
});