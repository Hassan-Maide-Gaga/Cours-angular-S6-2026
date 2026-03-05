import { Routes } from '@angular/router';
import { isConnectGuard } from './core/guards/is-connect.guard';

export const routes: Routes = [

    // Private
    {
        path: "private",
        canActivate: [isConnectGuard],
        loadChildren: () =>
            import('./features/private/privateRoutes.routes')
                .then(c => c.privateRoutes)
    },

    // Public
    {
        path: "public",
        loadChildren: () =>
            import('./features/public/publicRoutes.routes')
                .then(c => c.publicRoutes)
    },

    {
        path: "",
        redirectTo: "public/login",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "public/login"
    }
];
