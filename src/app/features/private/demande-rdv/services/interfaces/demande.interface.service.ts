import { Observable } from "rxjs";
import { DemandeListeResponse, DemandeRDVFilterModel } from "../../../models/demande.model";

export interface DemandeServiceInterface{
    getDemandesRDV(filter: DemandeRDVFilterModel): Observable<DemandeListeResponse>;
}