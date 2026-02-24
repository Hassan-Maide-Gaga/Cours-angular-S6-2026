import { Routes } from '@angular/router';
import { LoginComponent } from '../public/login/login.component';
import { PatientComponent } from '../public/patient/patient.component';
import { PublicComponent } from '../public/public.component';

export const publicRoutes: Routes = [
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