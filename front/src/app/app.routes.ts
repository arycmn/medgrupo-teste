import {Routes} from '@angular/router';
import { authenticatedGuard } from './guards/authenticated.guard';

export const AppRoutes: Routes = [

    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        canMatch: [authenticatedGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    }
]