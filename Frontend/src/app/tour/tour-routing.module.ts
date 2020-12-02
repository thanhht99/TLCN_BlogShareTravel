import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers';

import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours/list-tours.component';
import { BlogAndTripComponent } from './blog-and-trip/blog-and-trip.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddImageComponent } from './add-image/add-image.component';
import { RegisterTripComponent } from './register-trip/register-trip.component';
import { ErrorComponent } from '../_components';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          
          { path: 'list', component: ListToursComponent },            
          { path: ':id/blog&trip', component: BlogAndTripComponent, canActivate: [AuthGuard]},
          { path: ':id/blog&trip/registerTrip', component: RegisterTripComponent, canActivate: [AuthGuard]},
          { path: 'add', component: AddTourComponent, canActivate: [AuthGuard]},
          { path: 'add/image/:id', component: AddImageComponent, canActivate: [AuthGuard]},
          { path: 'error', component: ErrorComponent},
          
          //{ path: 'trip', component: BlogAndTripComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
