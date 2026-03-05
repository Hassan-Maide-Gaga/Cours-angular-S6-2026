import { Routes } from '@angular/router';
import { PublicComponent } from '../public/public.component';

export const publicRoutes: Routes = [
    {
        path: "",
        component: PublicComponent,
        children: [
            {
                path: "",
                redirectTo: "login",
                pathMatch: 'full'
            },
            {
                path: "login",
                loadComponent: () =>
                    import('./login/login.component')
                        .then(c => c.LoginComponent)
            },
            {
                path: "create-patient",
                loadComponent: () =>
                    import('./patient/patient.component')
                        .then(c => c.PatientComponent)
            },

        ]
    },
    // {
    //     path: "",
    //     redirectTo: "/public",
    //     pathMatch: "full"
    // },
    // {
    //     path: "**",
    //     redirectTo: "/public/login"
    // }
];