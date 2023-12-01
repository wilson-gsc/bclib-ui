import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ReportComponent } from './report.component';
import { ListGroupComponent } from './list-group.component';

export const BOOKS_ROUTES: Routes = [
    { path: '', component: ListComponent },
    { path: 'groups', component: ListGroupComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'report', component: ReportComponent }
];