import { Routes } from '@angular/router';
import { PrivateComponent } from '../private/private.component';
import { isConnectGuard } from '../../core/guards/is-connect.guard';

export const privateRoutes: Routes = [
    //private routes
    {
        path: "",
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
                loadComponent: () =>
                    import('../private/dashboard/dashboard.component')
                        .then(c => c.DashboardComponent)
            },
            {
                path: "create-demande",
                loadComponent: () =>
                    import('../private/form-demande/form-demande.component')
                        .then(c => c.FormDemandeComponent)
            },
            {
                path: "mes-rdv",
                loadComponent: () =>
                    import('../private/demande-rdv/list-demande/list-demande.component')
                        .then(c => c.ListDemandeComponent)
            },
            {
                path: "detail-rdv/:id",
                loadComponent: () =>
                    import('../private/rdv/detail-rdv/detail-rdv.component')
                        .then(c => c.DetailRdvComponent)
            },
            {
                path: "detail-consultation/:id",
                loadComponent: () =>
                    import('../private/patient/detail-consultation/detail-consultation.component')
                        .then(c => c.DetailConsultationComponent)
            },
            {
                path: "dossier-medical",
                loadComponent: () =>
                    import('../private/patient/dossier-medical/dossier-medical.component')
                        .then(c => c.DossierMedicalComponent)
            },
        ]
    }
];