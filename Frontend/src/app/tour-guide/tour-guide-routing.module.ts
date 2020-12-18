import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';
import { ListTourComponent } from '../list-tour/list-tour.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'info/:id', component: TourGuideInfoComponent },
            { path: 'info/:id/listTour', component: ListTourComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TourGuideRoutingModule { }