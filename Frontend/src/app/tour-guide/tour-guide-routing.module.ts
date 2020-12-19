import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';
import { ListTourComponent } from '../list-tour/list-tour.component';
import { ListRegisterTripComponent } from '../list-register-trip/list-register-trip.component';
import { TourGuideEditComponent } from './tour-guide-edit/tour-guide-edit.component';
import { DetailTourComponent } from '../detail-tour/detail-tour.component';
import { DetailRegisterTripComponent } from '../detail-register-trip/detail-register-trip.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'info/:id', component: TourGuideInfoComponent },
            { path: 'info/:id/update', component: TourGuideEditComponent },
            { path: 'info/:id/listTour', component: ListTourComponent },
            { path: 'info/:id/tour/:id', component: DetailTourComponent },
            { path: 'info/:id/listRegisterTrip', component: ListRegisterTripComponent },
            { path: 'info/:id/registerTrip/:id', component: DetailRegisterTripComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TourGuideRoutingModule { }