import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ListRegisterTripComponent } from '../list-register-trip/list-register-trip.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'info/:id', component: CustomerInfoComponent },
            { path: 'info/:id/listRegisterTrip', component: ListRegisterTripComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }