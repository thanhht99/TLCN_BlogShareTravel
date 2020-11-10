import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
  { path: 'account', loadChildren: accountModule },

  // { path: 'customerinfo/:id', component: CustomerInfoComponent},
  // { path: 'tourguideinfo/:id', component: TourGuideInfoComponent},
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
