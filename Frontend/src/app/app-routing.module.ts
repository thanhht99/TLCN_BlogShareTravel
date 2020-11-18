import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {CreatetourComponent} from './createtour/createtour.component';
import { AuthGuard } from './_helpers';

const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);
const tourguideModule = () => import('./tour-guide/tour-guide.module').then(x => x.TourGuideModule);
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'customer', loadChildren: customerModule, canActivate: [AuthGuard] },
  { path: 'tourguide', loadChildren: tourguideModule, canActivate: [AuthGuard] },
  { path: 'createtour', component:CreatetourComponent},

  // { path: 'customerinfo/:id', component: CustomerInfoComponent},
  // { path: 'tourguideinfo/:id', component: TourGuideInfoComponent},
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas : []
  
})
export class AppRoutingModule { }
