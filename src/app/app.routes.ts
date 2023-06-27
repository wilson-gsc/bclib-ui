import { Routes } from "@angular/router";

import { HomeComponent } from './home';
import { LoginComponent } from './account';
import { authGuard } from './_helpers';

const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);
const itemsRoutes = () => import('./items/items.routes').then(x => x.ITEMS_ROUTES);

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
    { path: 'account/login', component: LoginComponent },

    { path: 'items', loadChildren: itemsRoutes, canActivate: [authGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];