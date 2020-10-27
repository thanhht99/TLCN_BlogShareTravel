import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login',component: LoginComponent},
  { path: 'customerinfo', component: CustomerInfoComponent},
  { path: 'tourguideinfo', component: TourGuideInfoComponent},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
