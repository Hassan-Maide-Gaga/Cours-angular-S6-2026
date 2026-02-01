import { Routes } from '@angular/router';
import { ConnexionComponent } from './features/auth/connexion/connexion.component';
import { CreerCompteComponent } from './features/auth/creer-compte/creer-compte.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/demande-rdv/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/demande-rdv/list-demande/list-demande.component';
import { DetailConsultationComponent } from './features/patient/detail-consultation/detail-consultation.component';
import { DossierMedicalComponent } from './features/patient/dossier-medical/dossier-medical.component';
import { DetailRdvComponent } from './features/rdv/detail-rdv/detail-rdv.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "connexion",
        component: ConnexionComponent
    },
    {
        path: "creer-compte",
        component: CreerCompteComponent
    },
    {
        path: "faire-demande",
        component: FormDemandeComponent
    },
    {
        path: "mes-rdv",
        component: ListDemandeComponent
    },
    {
        path: "detail-rdv/:id",
        component: DetailRdvComponent
    },
    {
        path: "detail-consultation/:id",
        component: DetailConsultationComponent
    },
    {
        path: "dossier-medical",
        component: DossierMedicalComponent
    },
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];