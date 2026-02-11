import { Routes } from '@angular/router';
import { DashboardComponent } from '../private/dashboard/dashboard.component';
import { FormDemandeComponent } from '../private/form-demande/form-demande.component';
import { ListDemandeComponent } from '../private/demande-rdv/list-demande/list-demande.component';
import { DetailConsultationComponent } from '../private/patient/detail-consultation/detail-consultation.component';
import { DossierMedicalComponent } from '../private/patient/dossier-medical/dossier-medical.component';
import { DetailRdvComponent } from '../private/rdv/detail-rdv/detail-rdv.component';
import { PrivateComponent } from '../private/private.component';
import { isConnectGuard } from '../../core/guards/is-connect.guard';

export const privateRoutes: Routes = [
    //private routes
    {
        path: "private",
        component: PrivateComponent,
        canActivate: [isConnectGuard],
        canActivateChild: [isConnectGuard],
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
];