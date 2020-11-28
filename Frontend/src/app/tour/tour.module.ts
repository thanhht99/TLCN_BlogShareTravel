import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours.component';
import { BlogAndTripComponent } from './blog-and-trip.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddImageComponent } from './add-image/add-image.component';

import { ErrorComponent } from '../_components';

@NgModule({
  declarations: [
    LayoutComponent,
    ListToursComponent,
    BlogAndTripComponent,
    AddTourComponent,
    AddImageComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TourRoutingModule
  ],
  exports: [
    LayoutComponent,
  ]
  
})
export class TourModule { }
