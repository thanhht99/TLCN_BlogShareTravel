import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers';

import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours.component';
import { BlogAndTripComponent } from './blog-and-trip.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: 'list', component: ListToursComponent },
          { path: ':id/blog&trip', component: BlogAndTripComponent, canActivate: [AuthGuard]}
          //{ path: 'trip', component: BlogAndTripComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
