import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { AddEditDetailComponent } from './add-edit-detail.component';

export const ORDERS_ROUTES: Routes = [
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },

    { path: 'add-detail/:orderId', component: AddEditDetailComponent },
    { path: 'edit-detail/:id', component: AddEditDetailComponent },
];