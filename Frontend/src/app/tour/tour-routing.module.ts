import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers';

import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours/list-tours.component';

import { AddTourComponent } from './add-tour/add-tour.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ErrorComponent } from '../_components';

const blogAndTripModule = () => import('./blog-and-trip/blog-and-trip.module').then(x => x.BlogAndTripModule);

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          
          { path: 'list', component: ListToursComponent },            
          { path: 'blog&trip', loadChildren: blogAndTripModule, canActivate: [AuthGuard]},
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
