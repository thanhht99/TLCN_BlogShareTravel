import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours.component';
import { BlogAndTripComponent } from './blog-and-trip.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TourRoutingModule
  ],
  declarations: [
    LayoutComponent,
    ListToursComponent,
    BlogAndTripComponent
  ]
})
export class TourModule { }
