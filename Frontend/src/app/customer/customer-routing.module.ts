import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ListRegisterTripComponent } from '../list-register-trip/list-register-trip.component';
import { DetailRegisterTripComponent } from '../detail-register-trip/detail-register-trip.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'info/:id', component: CustomerInfoComponent },
            { path: 'info/:id/update', component: CustomerEditComponent },
            { path: 'info/:id/listRegisterTrip', component: ListRegisterTripComponent },
            { path: 'info/:id/registerTrip/:id', component: DetailRegisterTripComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }