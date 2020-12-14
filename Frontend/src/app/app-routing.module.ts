import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

import { HomeComponent } from './home/home.component';
import { ErrorComponent, FooterComponent, HeaderComponent } from './_components';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);
const tourguideModule = () => import('./tour-guide/tour-guide.module').then(x => x.TourGuideModule);
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const tourModule = () => import('./tour/tour.module').then(x => x.TourModule);



const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'customer', loadChildren: customerModule, canActivate: [AuthGuard] },
  { path: 'tourguide', loadChildren: tourguideModule, canActivate: [AuthGuard] },

  { path: 'tour', loadChildren: tourModule},
  {path:'edittour',component: CustomerEditComponent},
  { path: 'error', component: ErrorComponent},


  
  // { path: 'customerinfo/:id', component: CustomerInfoComponent},
  // { path: 'tourguideinfo/:id', component: TourGuideInfoComponent},
  





  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas : []
  
})
export class AppRoutingModule { }
