import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListeRDVModel, DemandeListeResponse, DemandeRDVFilterModel } from '@private/models';
import { environmentDev } from '@environments';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }

  public getDemandesRDV(filter: DemandeRDVFilterModel): DemandeListeResponse {
    setTimeout(() => {
      console.log('appel du backend');
    }, 5000);
    let demandes = [...MOCK_DEMANDES];

    if (filter.statut) {
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    if (filter.specialite) {
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }
    const page = filter.page || 1;
    const size = filter.size || environmentDev.limit || 5;


    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    // const pages: number[] = [];
    // for (let i = 1; i <= totalPages; i++) {
    //   pages.push(i);
    // }
    
    const pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
    const demandesByPage = demandes.slice(startIndex, endIndex)
    return {
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    };
  }
}
