import { Routes } from '@angular/router';
import { LoginComponent } from './features/public/login/login.component';
import { PatientComponent } from './features/public/patient/patient.component';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/private/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/private/demande-rdv/list-demande/list-demande.component';
import { DetailConsultationComponent } from './features/private/patient/detail-consultation/detail-consultation.component';
import { DossierMedicalComponent } from './features/private/patient/dossier-medical/dossier-medical.component';
import { DetailRdvComponent } from './features/private/rdv/detail-rdv/detail-rdv.component';
import { PublicComponent } from './features/public/public.component';
import { PrivateComponent } from './features/private/private.component';

export const routes: Routes = [
    //private routes
    {
        path: "private",
        component: PrivateComponent,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: 'full'
            },
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: "create-demande",
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
        ]
    }
    ,
    //public routes
    {
        path: "public",
        component: PublicComponent,
        children: [
            {
                path: "",
                redirectTo: "login",
                pathMatch: 'full'
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "create-patient",
                component: PatientComponent
            },

        ]
    },
    {
        path: "",
        redirectTo: "/public",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/public/login"
    }
];