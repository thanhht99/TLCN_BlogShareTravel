import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { RegisterComponent } from './register/register.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'customerinfo', component: CustomerInfoComponent},
  { path: 'tourguideinfo', component: TourGuideInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
