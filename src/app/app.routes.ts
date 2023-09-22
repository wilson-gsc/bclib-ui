import { Routes } from "@angular/router";

import { HomeComponent } from './home';
import { LoginComponent } from './account';
import { authGuard } from './_helpers';

const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);
const booksRoutes = () => import('./book/books.routes').then(x => x.BOOKS_ROUTES);
const studentsRoutes = () => import('./student/students.routes').then(x => x.STUDENTS_ROUTES);

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
    { path: 'account/login', component: LoginComponent },

    { path: 'books', loadChildren: booksRoutes, canActivate: [authGuard] },

    { path: 'students', loadChildren: studentsRoutes, canActivate: [authGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];