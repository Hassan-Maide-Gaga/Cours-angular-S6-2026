import { Observable } from "rxjs";
import { DemandeListeResponse, DemandeRDVFilterModel } from "../../../models/demande.model";
import { Inject, InjectionToken } from "@angular/core";

export interface DemandeServiceInterface{
    getDemandesRDV(filter: DemandeRDVFilterModel): Observable<DemandeListeResponse>;
}
export const DEMANDE_SERVICE_TOKEN = new InjectionToken<DemandeServiceInterface>('DemandeServiceInterface')