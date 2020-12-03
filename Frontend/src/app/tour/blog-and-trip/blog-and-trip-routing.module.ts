import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_helpers';

import { LayoutComponent } from './layout.component';
import { TripComponent } from './trip/trip.component';
import { RegisterTripComponent } from './register-trip/register-trip.component';


import { ErrorComponent } from '../../_components';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
                 
        { path: ':id', component: TripComponent, canActivate: [AuthGuard]},
        // { path: ':id/registerTrip', component: RegisterTripComponent, canActivate: [AuthGuard]},
        { path: ':id/registerTrip/:id', component: RegisterTripComponent, canActivate: [AuthGuard]},
        
         
        { path: 'error', component: ErrorComponent},
          
          //{ path: 'trip', component: BlogAndTripComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAndTripRoutingModule { }
